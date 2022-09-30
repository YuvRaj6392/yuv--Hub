const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const app=express();

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const db=require('./models');
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log('Successfully connected to the database!')
  }).catch((err)=>{
    console.log('Could not connect to the database!',err);
    process.exit();
  })

  app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to the yuvHub course by Yuv Raj!'
    })
  })

  require('./routes/user.routes')(app)
  require('./routes/tutorial.routes')(app)
  const port=8080;
  app.listen(port,()=>{
    console.log('Server is listening at port 8080')
  })
