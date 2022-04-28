require("dotenv").config();
const mongoose = require("mongoose")

const connection=async()=>{
    try{
        await mongoose.connect(process.env.Mongo_URI);
        console.log("successfully connected to database")
    }catch(err){console.log(err);}
}

connection();