const User=require('../controllers/user.controllers')
module.exports=app=>{
    var router=require('express').Router();
    router.post('/signup',User.signup);
    router.post('/login',User.login);
    router.post('/logout',User.logout);
    app.use('/api',router);
}