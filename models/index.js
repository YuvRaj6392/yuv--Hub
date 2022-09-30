const dbConfig=require('../config/db.config');
const mongoose=require('mongoose');
const db={};
db.url=dbConfig.url;
db.mongoose=mongoose;
db.users=require('./user.models.js')(mongoose);
db.tutorials=require('./tutorial.models')(mongoose);
module.exports=db;