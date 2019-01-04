const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

//status allower
const status=['active','disabled','pending','blocked']

const Schema = mongoose.Schema;

const schemaMusicsPlayList = new Schema({
   music: {type: Schema.Types.ObjectId, ref: 'Musics',
   required: true},
   playlist: {
     type: Schema.Types.ObjectId, ref: 'PlayList',
     required: true
  },
  user_published: {
    type: Schema.Types.ObjectId, ref: 'Users',
    required: true
 },
   date_create: {
       type: Date,
       required: true,
       default: Date.now()
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


module.exports=mongoose.model('PlayList',schemaMusicsPlayList)
