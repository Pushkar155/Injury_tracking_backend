const mongoose=require("mongoose");

const Userschema = new mongoose.Schema(
    {
        data:{
            type:[[Object]],
            required:true,
        },
        name:{
            type: String,
            required: true,
        },
        time:{
            type: String,
            required:true,
        }

    },
    {timestamps:true}
);


module.exports=mongoose.model("innjury_person_data",Userschema);