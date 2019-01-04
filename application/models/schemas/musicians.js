const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

//status allower
const status=['active','disabled','pending','blocked']

const Schema = mongoose.Schema;

const schemaMusicians = new Schema({
  name: {
      type: String,
      required: true,
      default: ''
      },
      icon: {
          type: String,
          required: false,
          default: ''
          },
      description: {
          type: String,
          required: true,
          default: ''
          },
   date_update: {
       type: Date,
       required: true,
       default: Date.now()
       },
   status:{
     type: String,
     enum: status,
     default: 'active'
   }
});


module.exports=mongoose.model('Musicians',schemaMusicians)
