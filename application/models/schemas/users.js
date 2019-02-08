
 const mongoose=require('mongoose')
 const uniqueValidator=require('mongoose-unique-validator')
  //allower roles
 const roles=['ADMIN_ROL','BASIC_ROL','VIST_ROL'];
 //status allower
 const status=['active','disabled','pending','blocked'];
 const sex =['female','male']

const Schema = mongoose.Schema;

const schemaUsers = new Schema({
  name:{ type: String, required: true},
  last_name: String,
  rol:{
      type: String,
      enum: roles,
      default: 'BASIC_ROL',
     },
  email: {
       type: String,
       required: true,
       unique: true,
       lowercase: true
    },
  password: { type: String, required: true, select: false},
  typeaccounts: {
     type: Schema.Types.ObjectId,
      ref: 'TypeAccounts',required:true
    },
  update_typeaccounts: { type: Date, default: Date.now()},
  birth_date: { type: Date, required: false},
  phone: { type: String, required: false},
  gender: { type: String, enum: sex},
  profile_picture: { type: String, enum: sex},
  followers_count: {type: Number, default: 0},
  songs: {type: Number, default: 0},
  followee_count: {type: Number, default: 0},
  language: {type: String,default: "en"},
  approve_followee: {type: Boolean, default: false},

  status:{
      type: String,
      enum: status,
      default: 'pending'
    }
});

schemaUsers.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
//increment  reaction field  of  musics colletion  when user created reaction


module.exports=mongoose.model('Users',schemaUsers)
