const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')



const Schema = mongoose.Schema;

const schemaSongPlayed = new Schema({
   music_played: {type: Schema.Types.ObjectId, ref: 'Musics', required: true},
   user_played: {  type: Schema.Types.ObjectId, ref: 'Users',  required: true },
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


module.exports=mongoose.model('SougPlayed',schemaSongPlayed)
