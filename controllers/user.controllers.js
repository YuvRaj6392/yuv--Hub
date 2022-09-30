const db=require('../models');
const userModels = require('../models/user.models');
const User=db.users
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
//for signup
exports.signup=(req,res)=>{

   const  email=req.body.email;
   const filter={email:email}
   User.findOne(filter,(err,user)=>{
    if(err || user===null)
    {
        const password=req.body.password;
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(password,salt)
        const user=new User({
            email:req.body.email,
            password:hash,
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


//for login 
exports.login=(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  if(!email && !password)
  {
    res.status(400).send('Please enter all the details!');
    return;
  }
  User.findOne({email:email},(err,data)=>{
    if(err || data===null)
    {
        res.status(401).send('User not Found. Please signup!');
        return;
    }
    if(bcrypt.compareSync(password,data.password))
    {
        const update = { isLoggedIn: true };
        User.findOneAndUpdate({email:email},update,{ useFindAndModify: false }).then((data)=>{
            if(!data)
            {
                res.status(500).send('Some Error occurred!')
                return;
            }
            const token=jwt.sign({_id:data._id},'shruv')
            data.token=token;
            res.send({
                data
            });

        }).catch(err=>{
            res.status(500).send('some error occurred!')
        })
       
    }
    else
    {
        res.status(401).send('Email or password not correct!')
    }

  })
}


exports.logout=(req,res)=>{
   
    if(!req.body.id)
    {
        res.status(400).send('Please provide user Id');
        return;
    }
    const id=req.body.id;
    const update={isLoggedIn:false};
    User.findOneAndUpdate({_id:id},update).then(data=>{
        if(!data)
        {
            res.status(400).send('Some error occurred!')
            return;
        }
      res.send({
        message1:'You have been successfully logged out!',
        message2:data
      })
    }).catch(err=>{
        res.status(500).send({
            message:'Error updating'
        })
    })
}


