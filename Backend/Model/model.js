const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const modelForm=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    registrationNumber:{
        type:Number,
        required:true
    },
    // domain:{
    //     type:String,
    //     required:true
    // },
    whatsappNumber:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("Form",modelForm);