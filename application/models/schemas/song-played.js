const mongoose=require('mongoose')
const Musics =mongoose.model('Musics'); //import schemas music
const Schema = mongoose.Schema;
const schemaSongPlayed = new Schema({
   music_played: {type: Schema.Types.ObjectId, ref: 'Musics', required: true},
   user_played: {  type: Schema.Types.ObjectId, ref: 'Users',  required: true },
   user_location: {  type: Schema.Types.ObjectId, ref: 'UserLocation' },
   current_time: Number,
       date_create: {
           type: Date,
           default: Date.now()
           },
   date_update: {
       type: Date,
       default: Date.now()
       },
   status:{
     type: String,
     default: 'active'
   }
});

// //upload collection music and albumens
schemaSongPlayed.pre('save',async function(next) {
  let music_id =this.music_played;
 let music_update= await Musics.findByIdAndUpdate(music_id,{$inc:{"played_count":1 }});
return next();

});

module.exports=mongoose.model('Played',schemaSongPlayed)
