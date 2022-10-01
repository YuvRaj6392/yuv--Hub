const db=require('../models');
const Tutorial=db.tutorials;


exports.AddCourse=(req,res)=>{
    if(!req.body.title)
    {
        res.status(400).send({
            message:'Content cannot be empty'
          
        })
        return;
    }
    let _skill=req.body.skills.toString().split(",")
    let _chapter=req.body.chapters.toString().split(",")
   const tutorial=new Tutorial({
    title:req.body.title,
    description:req.body.description,
    published:req.body.published,
    skills:_skill,
    chapters:_chapter,
    priceInRupees:req.body.priceInRupees,
    priceAfterDiscount:req.body.priceAfterDiscount,
    category:req.body.category,
    imageUrl:req.body.imageUrl,
    videoUrl:req.body.videoUrl,
    notesUrl:req.body.notesUrl,
    durationInMin:req.body.durationInMin,
    popularity:req.body.popularity
   });

   tutorial.save(tutorial).then(data=>{
    res.status(200).send(data)
   }).catch(err=>{
    res.status(500).send('Some error occurred!')
   })

}

exports.getAllCourses=(req,res)=>{
    Tutorial.find({},(err,data)=>{
        if(err)
        {
            res.status(500).send('Some error occurred while retrieving the data!');
            return;
        }
        res.send(data)
    })
}

exports.getCourseById=(req,res)=>{
    id=req.params.id
    Tutorial.find({_id:id},(err,data)=>{
        if(err)
        {
            res.status(500).send('Some error occurred!');
            return;
        }
        res.status(200).send(data)
    })

}

exports.getCourseByTitle=(req,res)=>{
    title=req.query.title
    console.log(title)
    Tutorial.find({title:title},(err,data)=>{
        if(err)
        {
            res.status(500).send('Some error occurred!');
            return;
        }
        res.status(200).send(data)
    })

}

