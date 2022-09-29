const db=require('../models');
const userModels = require('../models/user.models');
const User=db.users

exports.signup=(req,res)=>{
console.log('inside')
   const  email=req.body.email;
   const filter={email:email}
   User.findOne(filter,(err,user)=>{
    if(err || user===null)
    {
        const user=new User({
            email:req.body.email,
            password:req.body.password,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            isLoggedIn:false
        });
        user.save(user).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            res.status(500).send('Some error occurred, Please try again!')
        })
    }
    else
    {
        res.status(500).send('User already exists!')
    }
   })
}

