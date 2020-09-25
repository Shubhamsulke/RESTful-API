const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv/config');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);

app.get('/',(req,res)=>{
    res.send('This is Home');
});
//connect db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true } ,

()=>console.log('connected to DB')
);

app.listen(5000);