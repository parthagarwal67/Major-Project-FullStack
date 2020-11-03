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
            collection.insert({...req.body,ratings:[],comments:[]},(err,r)=>{
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


var storage1 = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);
        console.log(req.body._id);
        cb(null,file.fieldname+"_"+req.body._id+"."+"jpg");
        // if(!req.hasTextDataProcessed)
        // {
        //     var collection=connection.db('projectize').collection('profile');
        //     collection.remove({email:req.body.email},(err,res)=>{
        //      if(!err)
        //      {
        //         collection.insert(req.body,(err,r)=>{
        //         if(!err)
        //         {
        //              console.log(r);
        //             //  res.send({Status:"ok",resultData:r[0].gender})
        //              var insertedId1=  r.insertedIds['0'];
                    
        //              console.log("inserted id is returned as->"+insertedId1)
        //              req.hasTextDataProcessed = true;
        //              req.insertedId1=insertedId1;
        //              req.profileCtr = 1;
        //             //  req.pptCtr = 1;
        //             //  req.reportCtr = 1;
        //             //  req.screenshotsCtr = 1;
        //             //  req.setupprojectCtr = 1;
        //             //  req.covervideoCtr = 1;
        //              cb(null,req.insertedId1+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
                  
        //         }
        //         else
        //         {
        //             return null;
        //         }
        //     })
        //      }
        //      else
        //      {
        //        return null;
        //      }

        // })
        // }
        // else{

        //     cb(null,req.insertedId1+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
        
        // }


    }
})

var storage2 = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);
        console.log(req.body)

        // if(!req.hasTextDataProcessed)
        // {

            var collection=connection.db('projectize').collection('projects');
            collection.update({_id:ObjectId(req.body._id)},{$set:{zipext:req.body.zipext}},(err,r)=>{
                if(!err)
                {
                   // console.log(r);
                    //var insertedId=  r.insertedIds['0'];
                    
                     //console.log("inserted id is returned as->"+insertedId)
                     //req.hasTextDataProcessed = true;
                     //req.insertedId=insertedId;
                     req.zipfileCtr = 1;
                    //  req.pptCtr = 1;
                    //  req.reportCtr = 1;
                    //  req.screenshotsCtr = 1;
                    //  req.setupprojectCtr = 1;
                    //  req.covervideoCtr = 1;
                     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
                }
                else
                {
                    // console.log("2nd Else")
                    // console.log(err)
                    return null;
                }
            })

        // }
        // else{
        //     console.log("ELSE")
        //     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
        
        // }


    }
})
var storage3 = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);
        console.log(req.body)

        // if(!req.hasTextDataProcessed)
        // {

            var collection=connection.db('projectize').collection('projects');
            collection.update({_id:ObjectId(req.body._id)},{$set:{pptext:req.body.pptext}},(err,r)=>{
                if(!err)
                {
                   // console.log(r);
                    //var insertedId=  r.insertedIds['0'];
                    
                     //console.log("inserted id is returned as->"+insertedId)
                     //req.hasTextDataProcessed = true;
                     //req.insertedId=insertedId;
                    // req.zipfileCtr = 1;
                     req.pptCtr = 1;
                    //  req.reportCtr = 1;
                    //  req.screenshotsCtr = 1;
                    //  req.setupprojectCtr = 1;
                    //  req.covervideoCtr = 1;
                     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
                }
                else
                {
                    // console.log("2nd Else")
                    // console.log(err)
                    return null;
                }
            })

        // }
        // else{
        //     console.log("ELSE")
        //     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
        
        // }


    }
})
var storage4 = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);
        console.log(req.body)

        // if(!req.hasTextDataProcessed)
        // {

            var collection=connection.db('projectize').collection('projects');
            collection.update({_id:ObjectId(req.body._id)},{$set:{reportext:req.body.reportext}},(err,r)=>{
                if(!err)
                {
                   // console.log(r);
                    //var insertedId=  r.insertedIds['0'];
                    
                     //console.log("inserted id is returned as->"+insertedId)
                     //req.hasTextDataProcessed = true;
                     //req.insertedId=insertedId;
                     //req.zipfileCtr = 1;
                    //  req.pptCtr = 1;
                      req.reportCtr = 1;
                    //  req.screenshotsCtr = 1;
                    //  req.setupprojectCtr = 1;
                    //  req.covervideoCtr = 1;
                     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
                }
                else
                {
                    // console.log("2nd Else")
                    // console.log(err)
                    return null;
                }
            })

        // }
        // else{
        //     console.log("ELSE")
        //     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
        
        // }


    }
})
var storage5 = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);
        console.log(req.body)

        if(!req.hasTextDataProcessed)
        {

            var collection=connection.db('projectize').collection('projects');
            collection.updateMany({_id:ObjectId(req.body._id)},{$set:{ssext:req.body.ssext}},(err,r)=>{
                if(!err)
                {
                   // console.log(r);
                    //var insertedId=  r.insertedIds['0'];
                    
                     //console.log("inserted id is returned as->"+insertedId)
                     req.hasTextDataProcessed = true;
                     //req.insertedId=insertedId;
                     //req.zipfileCtr = 1;
                    //  req.pptCtr = 1;
                    //  req.reportCtr = 1;
                      req.screenshotsCtr = 1;
                    //  req.setupprojectCtr = 1;
                    //  req.covervideoCtr = 1;
                     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
                }
                else
                {
                    // console.log("2nd Else")
                    // console.log(err)
                    return null;
                }
            })

        }
        else
        {
            // console.log("ELSE")
            cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
        }


    }
})
var storage6 = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);
        console.log(req.body)

        // if(!req.hasTextDataProcessed)
        // {

            var collection=connection.db('projectize').collection('projects');
            collection.update({_id:ObjectId(req.body._id)},{$set:{setproext:req.body.setproext}},(err,r)=>{
                if(!err)
                {
                   // console.log(r);
                    //var insertedId=  r.insertedIds['0'];
                    
                     //console.log("inserted id is returned as->"+insertedId)
                     //req.hasTextDataProcessed = true;
                     //req.insertedId=insertedId;
                     //req.zipfileCtr = 1;
                    //  req.pptCtr = 1;
                    //  req.reportCtr = 1;
                    //  req.screenshotsCtr = 1;
                      req.setupprojectCtr = 1;
                    //  req.covervideoCtr = 1;
                     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
                }
                else
                {
                    // console.log("2nd Else")
                    // console.log(err)
                    return null;
                }
            })

        // }
        // else{
        //     console.log("ELSE")
        //     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
        
        // }


    }
})
var storage7 = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);
        console.log(req.body)

        // if(!req.hasTextDataProcessed)
        // {

            var collection=connection.db('projectize').collection('projects');
            collection.update({_id:ObjectId(req.body._id)},{$set:{coverext:req.body.coverext}},(err,r)=>{
                if(!err)
                {
                   // console.log(r);
                    //var insertedId=  r.insertedIds['0'];
                    
                     //console.log("inserted id is returned as->"+insertedId)
                     //req.hasTextDataProcessed = true;
                     //req.insertedId=insertedId;
                     //req.zipfileCtr = 1;
                    //  req.pptCtr = 1;
                    //  req.reportCtr = 1;
                    //  req.screenshotsCtr = 1;
                    //  req.setupprojectCtr = 1;
                      req.covervideoCtr = 1;
                     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
                }
                else
                {
                    // console.log("2nd Else")
                    // console.log(err)
                    return null;
                }
            })

        // }
        // else{
        //     console.log("ELSE")
        //     cb(null,req.body._id+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
        
        // }


    }
})



var upload=multer({storage:storage})
var upload1=multer({storage:storage1})
var upload2=multer({storage:storage2})
var upload3=multer({storage:storage3})
var upload4=multer({storage:storage4})
var upload5=multer({storage:storage5})
var upload6=multer({storage:storage6})
var upload7=multer({storage:storage7})

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
        sendMail("agarwalparth672000@gmail.com", "ccmcdwwivizwtole" , req.body.email, "Projectize SignUp Successful", `this is content   <h3>Hi</h3><br><h6>Congratulations you've been signed up successfully on Projectize.</h6>` )
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


app.post('/forgot-password',bodyParser.json(),(req,res)=>{
    console.log(req.body);
    var collection=connection.db('projectize').collection('accountholder');
    collection.find({email:req.body.email}).toArray((err,docs)=>{
      if(!err && docs.length > 0)
      {
        res.send({Status:"ok",resultData:docs});
        sendMail("agarwalparth672000@gmail.com", "ccmcdwwivizwtole" ,req.body.email, "Forgot Password",
         '<h3>Hi</h3><br><p> your password is:</p>'+ JSON.stringify(docs[0].password))
      }
      else
      {
          res.send({Status:"failed",resultData:err});
      }
    })
  })


app.post('/user-subscription',bodyParser.json(),(req,res)=>{
    console.log(req.body);
    // var collection=connection.db('projectize').collection('accountholder');
    // collection.find({email:req.body.email}).toArray((err,docs)=>{
    //   if(!err && docs.length > 0)
    //   {
        res.send({status:"ok"});
        sendMail("agarwalparth672000@gmail.com", "ccmcdwwivizwtole" ,req.body.email, "User Subscription",
        '<h3>Dear Patron</h3><br><p> you have been subscribed to recieve regional updates and promotional offers.</p><br><br><p><font size="2px">Click to <font color="blue">unsbscribe</font> from reciveing any further updates.</font></p>')
    //   }
    //   else
    //   {
    //       res.send({Status:"failed",resultData:err});
    //   }
    // })
})  

  app.post('/get-searched-projects',bodyParser.json(),(req,res)=>{
    // res.send(users);
    console.log(req.body.key)
    var collection=connection.db('projectize').collection('projects');
    collection.find({$text:{$search:req.body.key}}).toArray((err,docs)=>{
        if(!err)
        {
            console.log(docs)
            res.send({Status:"ok",resultData:docs});
            
        }
        else
        {
            console.log(err)
            res.send({Status:"failed",resultData:err});
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

app.post('/update-projects-data',bodyParser.json(),(req,res)=>{
    // console.log(req.body)
    // console.log(req.body._id)
    var collection=connection.db('projectize').collection('projects');
  
    collection.updateOne({_id:ObjectId(req.body._id)},{$set:{title:req.body.title,desc:req.body.desc,tech:req.body.tech,key:req.body.key}},(err,r)=>{

        if(!err)
        {
             res.send({Status:'success'})
               
        }
        else
        {
               res.send({Status:"failed"});
        }

    })

   
})
app.post('/delete-project',bodyParser.json(),(req,res)=>{
    console.log(req.body._id);
    var collection=connection.db('projectize').collection('projects');
    collection.deleteOne({_id:ObjectId(req.body._id)},(err)=>{
        if(!err)
        {
            res.send({status:'ok'});
            console.log("Project Deleted");
        }
        else
        {
            res.send({status:'failed'});
        }
    })
})

  
app.post('/profile-data',bodyParser.json(),(req,res)=>{
    console.log(req.body)
    var collection=connection.db('projectize').collection('accountholder');
    collection.update({email:req.body.email},{$set:req.body},(err,r)=>{
        if(!err)
        {
            res.send({Status:'updated'})
        }
        else
        {
            // collection.insert(req.body,(err,docs)=>{
            //     if(!err)
            //     {
            //         res.send({Status:'ok'})
            //     }
            //     else
            //     {
                    res.send({Status:'failed'})
                // }
            // })
        }
    })
})

  app.get('/get-profile',(req,res)=>{
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

//   app.get('/list-accounts',(req,res)=>{
//     // res.send(users);
 
//     var collection=connection.db('projectize').collection('accountholder');
//     collection.find().toArray((err,docs)=>{
//         if(!err)
//         {
//             res.send({Status:"ok",resultData:docs[0].email});
//         }
//         else
//         {
//             res.send({Status:"failed",resultData:err});
//         }
//     })
//   })




/* 

app.post('/update-user',bodyParser.json(),(req,res)=>{
    // var p ={username:req.query.username,password:req.query.password}
    console.log(req.body);
   // users.push(req.body);

var collection=connection.db('teststudent').collection('studrecords');
collection.update({_id:ObjectId(req.body._id)},{$set:{fname:req.body.fname,rollNo:req.body.rollNo,stream:req.body.stream,branch:req.body.branch,sec:req.body.sec}},(err,r)=>{
    if(!err)
    {
        res.send({Status:"ok"});
    }
    else
    {
        res.send({Status:"failed"});
    }
})
})

*/



app.post('/project-rating',bodyParser.json(),(req,res)=>{
    var collection=connection.db('projectize').collection('projects');
    collection.update({_id:ObjectId(req.body._id)},{$pull:{"ratings":{"email":req.body.email}}},(err,r)=>{
    if(!err)
    {
        collection.update({_id:ObjectId(req.body._id)},{$push:{"ratings":{"email":req.body.email,"ratings":req.body.ratings}}},(err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",resultData:docs});
        }
        else
        {
            res.send({status:"failed",resultData:err});
        }
    })
    }
    else
    {
        res.send({status:"failed",resultData:err});
    }    
    })
})

app.post('/project-comments',bodyParser.json(),(req,res)=>{
    var collection=connection.db('projectize').collection('projects');
    // collection.update({_id:ObjectId(req.body._id)},{$pull:{"comments":{"email":req.body.email}}},(err,r)=>{
    // if(!err)
    // {
        collection.update({_id:ObjectId(req.body._id)},{$push:{"comments":{"_id":req.body.loginid,"name":req.body.name,"email":req.body.email,"comments":req.body.comments,"date":req.body.date}}},(err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",resultData:docs});
        }
        else
        {
            res.send({status:"failed",resultData:err});
        }
    })
    // }
    // else
    // {
    //     res.send({status:"failed",resultData:err});
    // }    
    // })
})


app.post('/login-account',bodyParser.json(),(req,res)=>{
    // console.log(req.body)
    var collection=connection.db('projectize').collection('accountholder');
    collection.find(req.body).toArray((err,docs)=>{
        if(!err && docs.length>0)
        // req.body.email==docs.email && req.body.password==docs.password
        {
            res.send({Status:"ok",resultData:docs[0].name,resultMail:docs[0].email,resultGender:docs[0].gender,loginid:docs[0]._id,resultFname:docs[0].fname});
        }
        else
        {
            res.send({Status:"failed"});
        }
    })
})

app.post('/upload-testimonial',bodyParser.json(),(req,res)=>{
    console.log(req.body);
    var collection=connection.db('projectize').collection('testimonials');
    collection.insert(req.body,(err,doc)=>{
        if(!err)
        {
            res.send({status:'ok'});
        }
        else
        {
            res.send({status:'failed'});
        }
    })
})
app.get('/get-testimonial',(req,res)=>{
        var collection=connection.db('projectize').collection('testimonials');
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

    
app.post('/data-with-file',

                            upload.fields([{name:'zipfile',maxcount:1},{name:'ppt',maxcount:1},{name:'report',maxcount:1},{name:'screenshots',maxcount:8},{name:'setupproject',maxcount:1},{name:'covervideo',maxcount:1}]),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})   
                        });

// -----------------updating project files starts--------------------

app.post('/project-zipfile',

                            upload2.single('zipfile'),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})
                        });
                        
app.post('/project-pptfile',

                            upload3.single('ppt'),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})
                        });

app.post('/project-reportfile',

                            upload4.single('report'),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})
                        });    
                        
app.post('/project-screenshots',

                            upload5.array('screenshots',8),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})
                        });    

app.post('/project-setupfile',

                            upload6.single('setupproject'),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})
                        });    

app.post('/project-coverfile',

                            upload7.single('covervideo'),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})
                        });    

// -----------------updating project files ends--------------------                      

app.post('/data-with-profile',

                            upload1.fields([{name:'profile',maxcount:1}]),
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

