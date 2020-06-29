var express = require('express');
var cors = require('cors');
var multer= require('multer');
var bodyParser= require('body-parser');
var MongoClient= require('mongodb').MongoClient;
var ObjectId= require('mongodb').ObjectID;


var storage = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);


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
                     req.screenshotCtr = 1;
                     cb(null,req.insertedId+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +".jpg");
       
                  
                }
                else
                {
                    return null;
                }
            })













              

        }
        else{

            cb(null,req.insertedId+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +".jpg");
        }


    }
})

var upload=multer({storage:storage})


var app = express();

let client= new MongoClient("mongodb+srv://ParthAgarwal:Parth9928034234@cluster0-jgvck.mongodb.net/projectize?retryWrites=true&w=majority",{useNewUrlParser:true});

app.use(cors());


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


function insertProjectData(req)
{

   
}


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

app.get('/list-account',(req,res)=>{
    // res.send(users);
 
    var collection=connection.db('projectize').collection('accountholder');
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

                            upload.fields([{name:'profile',maxcount:1},{name:'screenshot',maxcount:8}]),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})   
                        });

app.listen(4000,()=>{
    console.log("Server running on port 4000");
})