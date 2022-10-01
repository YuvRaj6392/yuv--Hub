const auth=require('../middleware/auth');
const Tutorial=require('../controllers/tutorial.controllers')
module.exports=app=>{
    
    var  router=require('express').Router();
   
    router.post('/add',Tutorial.AddCourse);
    router.get('/show',Tutorial.getAllCourses);
    router.get('/:id',Tutorial.getCourseById);
    router.get('/',Tutorial.getCourseByTitle);
    app.use('/api/tutorial',auth,router)
}
