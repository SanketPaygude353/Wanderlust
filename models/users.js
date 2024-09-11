const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportMongooseLocal=require("passport-local-mongoose");

const userSchema=new Schema({
   email:{
    type:String,
    required:true,
   },

})

userSchema.plugin(passportMongooseLocal);
module.exports=mongoose.model("User",userSchema);