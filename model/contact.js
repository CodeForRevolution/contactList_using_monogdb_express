const mongoose=require('mongoose');
const constactSchema=new mongoose.Schema({
  name:{
    type:String,
    require:true
  }  ,
  phone:{
    type:String,
    require:true
  }
});
const Contact=mongoose.model('Contact',constactSchema);
module.exports=Contact;