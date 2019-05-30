 const uniqueValidator=require('mongoose-unique-validator')
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const schemaPlaceEntertainment = new Schema({
 name:{
   type: String,
   required: true,
   lowercase: true
 },
 laguage_code:{
   type: String,
   required: true,
    default: 'es'
  },
  open:{
    type: Boolean,
    default: false
   }
});



schemaPlaceEntertainment.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports=mongoose.model('EntertainmentCentersDay',schemaPlaceEntertainment);
