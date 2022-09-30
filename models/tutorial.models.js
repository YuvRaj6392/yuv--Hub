module.exports=mongoose=>{
    const Tutorial=mongoose.model('tutorial',mongoose.Schema({
        name:{type:String}
    }))
    return Tutorial;
}