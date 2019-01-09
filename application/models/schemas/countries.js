
 const mongoose=require('mongoose')
 //status allower


const Schema = mongoose.Schema;

const schemaCountries = new Schema({
  name:{ type: String, required: true},
  code:{ type: String, required: true},
  code_iso:{ type: String, required: true}
});


module.exports=mongoose.model('Countries',schemaCountries)
