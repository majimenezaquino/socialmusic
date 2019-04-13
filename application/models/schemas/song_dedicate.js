const mongoose=require('mongoose')
const Musics =mongoose.model('Musics'); //import schemas music


const Schema = mongoose.Schema;

const schemaSongDedicate = new Schema({
type_dedicate:{ type: String, enum: ['visible','incognito'], required: true},
user_dedicated: {type: Schema.Types.ObjectId, ref: 'Users'},
user_receive: {type: Schema.Types.ObjectId, ref: 'Users'},
music_dedicated:{type: Schema.Types.ObjectId, ref: 'Musics'},
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
     default: 'active'
   }
});

//upload collection music and albumens
schemaSongDedicate.pre('save',async function(next) {
  let music_id =this.music_dedicated;
  let playlist_id =this.playlist;
 let music_update= await Musics.findByIdAndUpdate(music_id,{$inc:{"dedicated":1 }});
return next();

});

module.exports=mongoose.model('SongDedicate',schemaSongDedicate);
