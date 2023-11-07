const express= require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const PORT= 3001;
const MONGO__DB="mongodb+srv://pushkar:ugFnKyFooWPmrOhX@cluster0.jhyk8ui.mongodb.net/node-API?retryWrites=true&w=majority"

const person =require("./router/userrouter");

const app = express();
app.use(bodyparser.json());
dotenv.config();

app.use(cors());

app.use("/api/user",person);


app.get("/",(req,res)=>{
    res.send("Hello World From Server");
})
mongoose.connect(MONGO__DB).then(()=>{app.listen(PORT,()=>{
    console.log((`Node Api Is Connected To ${PORT}`))
})
    console.log("Connected To MongoDb");
}).catch((error)=>{
    console.log(error);
})
