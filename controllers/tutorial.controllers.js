const db=require('../models');
const Tutorial=db.tutorials;


exports.getCourse=(req,res)=>{
    Tutorial.find({}).then(data=>{
        res.send(data);
    })
}