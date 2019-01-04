
 const mongoose=require('mongoose')

 
const Schema = mongoose.Schema;

const schemaCities = new Schema({
    country:{ type: String,required: true},
    name:{ type: String, required: true},
    lat:{ type: String},
    lng:{ type: String},
  
});



module.exports=mongoose.model('Cities',schemaCities)