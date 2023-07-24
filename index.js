const nodemailer=require('nodemailer')
const sender=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'sender email',
        pass:'sender password'
    }
})
const composemail={
    from:'sender email',
    to:'receiver email',
    subject:"mail sending from nodemailer",
    text:'hi this message sent from me',
}

sender.sendMail(composemail,(error,info)=>{
    if(error)
    {
        console.log(error)
    }
    else{
        console.log("Mail sent successfully.......")
    }
})