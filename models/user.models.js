module.exports=mongoose=>{
    const User=mongoose.model('user',mongoose.Schema({
        email:{type:String},
        password:{type:String},
        firstName:{type:String},
        lastName:{type:String},
        isLoggedIn:{type:Boolean},
        token:String
    },{
        timestamps:true
    }))
    return User;
}