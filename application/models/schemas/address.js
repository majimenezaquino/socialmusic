
 const mongoose=require('mongoose')

 //status allower
 const status=['active','disabled','pending','blocked']

const Schema = mongoose.Schema;

const schemaAddress = new Schema({
    country:{type: Schema.Types.ObjectId, ref: 'Countries'},
    city:{type: Schema.Types.ObjectId, ref: 'Cities'},
    user:{type: Schema.Types.ObjectId, ref: 'Users'},
    street:{ type: String},
    house_number:{ type: String},
    postcode: { type: String},
    status:{
      type: String,
      enum: status,
      default: 'active'
    }
});



module.exports=mongoose.model('Address',schemaAddress)
