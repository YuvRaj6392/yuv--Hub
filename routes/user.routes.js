const User=require('../controllers/user.controllers')
module.exports=app=>{
    var router=require('express').Router();
    router.post('/signup',User.signup);
    router.post('/login');
    router.post('/logout');
    app.use('/api',router);
}