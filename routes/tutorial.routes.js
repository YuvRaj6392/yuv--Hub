const auth=require('../middleware/auth');
const Tutorial=require('../controllers/tutorial.controllers')
module.exports=app=>{
    
    var  router=require('express').Router();
   
    router.get('/show',Tutorial.getCourse)
    app.use('/api',auth,router)
}
