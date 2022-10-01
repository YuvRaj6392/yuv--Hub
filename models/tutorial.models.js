module.exports=mongoose=>{
    const Tutorial=mongoose.model('tutorial',mongoose.Schema({
        title:{type:String},
        description:{type:String},
        published:{type:Boolean},
        skills:[
            {
                type:String
            }
        ],
        chapters:[
            {
                type:String
            }
        ],
        priceInRupees:{type:Number},
        priceAfterDiscount:{type:Number},
        category:{type:String},
        imageUrl:{type:String},
        videoUrl:{type:String},
        notesUrl:{type:String},
        durationInMin:{type:Number, default:60, min:0, max:120},
        popularity:{type:Number,default:4.0}
    },{
        timestamps: true
    }
    ))
    return Tutorial;
}