var nodemailer = require('nodemailer');


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

sendMail("from_email", "write_your_app_password_here_of_from_email" , "to_whome_you_want_to_send_email", "this is just to Test Node mailer this is subject", `this is content   <h3>Hi</h3><br><h6>Following is the link to rest your password</h6><a href="http://localhost:4200/newpassword">Reset Password</a>` )