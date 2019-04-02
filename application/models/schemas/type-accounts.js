const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')



const Schema = mongoose.Schema;

const SchemaTypeAccounts = new Schema({
   name: {
       type: String,
       required: true,
        unique: true
       },
       limit_upload: {
           type: Number,
           required: true,
           default: 0
       },
       limit_musician: {
           type: Number,
           required: true,
           default: 0
       },
    days_upload: {
        type: Number,
        required: true,
        default: 0
    },
   status:{
     type: String,
     default: 'active'
   }
});

  SchemaTypeAccounts.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports=mongoose.model('TypeAccounts',SchemaTypeAccounts)
