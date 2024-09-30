const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const app = express()
const dotenv=require('dotenv') 


const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected Successfully")

    }catch(err){
        console.log(err);

    }

}


dotenv.config() // need to config here to work with env
app.use(cors())


app.listen(process.env.PORT,()=>{
    connectDB();    
    console.log("App is running on port 5000")
})