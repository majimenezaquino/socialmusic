
 const mongoose=require('mongoose')
 const uniqueValidator=require('mongoose-unique-validator')

 //status allower
 const status=['active','disabled','pending','blocked']
 
const Schema = mongoose.Schema;

const schemaGeners = new Schema({
    name:{ type: String, required: true, unique: true},
    description:{ type: String, required: true},
    status:{
      type: String,
      enum: status,
      default: 'active'
    }
});

schemaGeners.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

module.exports=mongoose.model('Genres',schemaGeners)