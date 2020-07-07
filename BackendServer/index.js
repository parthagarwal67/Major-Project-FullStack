var express = require('express');
var cors = require('cors');
var multer= require('multer');
var bodyParser= require('body-parser');
var MongoClient= require('mongodb').MongoClient;
var ObjectId= require('mongodb').ObjectID;
const path = require('path');
var nodemailer = require('nodemailer');




var storage = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);


        if(!req.hasTextDataProcessed)
        {
            var collection=connection.db('projectize').collection('projects');
            collection.insert(req.body,(err,r)=>{
                if(!err)
                {
                    console.log(r);
              var insertedId=  r.insertedIds['0'];
                    
                      console.log("inserted id is returned as->"+insertedId)
                      req.hasTextDataProcessed = true;
                     req.insertedId=insertedId;
                     req.zipfileCtr = 1;
                     req.pptCtr = 1;
                     req.reportCtr = 1;
                     req.screenshotsCtr = 1;
                     req.setupprojectCtr = 1;
                     req.covervideoCtr = 1;
                     cb(null,req.insertedId+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
                  
                }
                else
                {
                    return null;
                }
            })

        }
        else{

            cb(null,req.insertedId+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
        
        }


    }
})

var upload=multer({storage:storage})


var app = express();

let client= new MongoClient("mongodb+srv://ParthAgarwal:Parth9928034234@cluster0-jgvck.mongodb.net/projectize?retryWrites=true&w=majority",{useNewUrlParser:true});

app.use(cors());
app.use(express.static(path.join(__dirname,'uploads')));



//arrays should be declared



var connection;
client.connect((err,con)=>{
    if(!err)
    {
        console.log("database connected successfully")
        connection=con
    }
    else
    {
        console.log("database could not connected")
    }
})




app.post('/create-account',bodyParser.json(),(req,res)=>{
    // var p ={username:req.query.username,password:req.query.password}
    console.log(req.body);
   // users.push(req.body);

var collection=connection.db('projectize').collection('accountholder');
collection.find({email:req.body.email}).toArray((err,docs)=>{
    if(!err && docs.length>0)
    {
        res.send({Status:"failed",resultData:"Email Already Registered"});
    }
    else
    {
    collection.insert(req.body,(err,r)=>{
    if(!err)
    {
        sendMail("agarwalparth672000@gmail.com", "hoovjadjioeutgot" , req.body.email, "Project Hub SignUp Successful", `this is content   <h3>Hi</h3><br><h6>Congratulations your sign up is successful on Project Hub.</h6>` )
        res.send({Status:"ok",resultData:"Created Successfully"});
        // location.reload();
        // window.location.href="http://localhost:4200/login";
    }
    else
    {
        res.send({Status:"failed",resultData:err});
    }
})
    }
})

})

app.get('/get-projects',(req,res)=>{
    // res.send(users);
 
    var collection=connection.db('projectize').collection('projects');
    collection.find().toArray((err,docs)=>{
        if(!err)
        {
            res.send({Status:"ok",resultData:docs});
        }
        else
        {
            res.send({Status:"failed",resultData:err});
        }
    })
  })

app.post('/login-account',bodyParser.json(),(req,res)=>{
    // console.log(req.body)
    var collection=connection.db('projectize').collection('accountholder');
    collection.find(req.body).toArray((err,docs)=>{
        if(!err && docs.length>0)
        // req.body.email==docs.email && req.body.password==docs.password
        {
            res.send({Status:"ok",resultData:docs[0].name});
        }
        else
        {
            res.send({Status:"failed"});
        }
    })
})

app.post('/data-with-file',

                            upload.fields([{name:'zipfile',maxcount:1},{name:'ppt',maxcount:1},{name:'report',maxcount:1},{name:'screenshots',maxcount:8},{name:'setupproject',maxcount:1},{name:'covervideo',maxcount:1}]),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})   
                        });



app.listen(4000,()=>{
    console.log("Server running on port 4000");
})





function sendMail(from, appPassword, to, subject,  htmlmsg)
{
    let transporter=nodemailer.createTransport(
        {
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:
            {
             //  user:"weforwomen01@gmail.com",
             //  pass:""
             user:from,
              pass:appPassword
              
    
            }
        }
      );
    let mailOptions=
    {
       from:from ,
       to:to,
       subject:subject,
       html:htmlmsg
    };
    transporter.sendMail(mailOptions ,function(error,info)
    {
      if(error)
      {
        console.log(error);
      }
      else
      {
        console.log('Email sent:'+info.response);
      }
    });
}

