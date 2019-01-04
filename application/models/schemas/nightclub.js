const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')
 //allower roles
const roles=['ADMIN_ROL','BASIC_ROL','VIST_ROL'];
//status allower
const status=['active','disabled','pending','blocked'];
const sex =['female','male']

const Schema = mongoose.Schema;

const schemaNightClub = new Schema({
 name:{ type: String, required: true},
 description: String,
 user_published: {
   type: Schema.Types.ObjectId, ref: 'Users',
   required: true
},
 img: { type: String, enum: sex},
 followers_count: {type: Number, default: 0},
 followee_count: {type: Number, default: 0},
 status:{
     type: String,
     enum: status,
     default: 'pending'
   }
});

schemaNightClub.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });


module.exports=mongoose.model('Users',schemaNightClub)
