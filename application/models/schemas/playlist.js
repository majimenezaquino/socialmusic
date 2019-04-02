const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

//status allower
const status=['active','disabled','pending','blocked']
const Musics =mongoose.model('Musics'); //import schemas music
const Albumes =mongoose.model('Albumens'); //import schemas music
const Schema = mongoose.Schema;

const schemaMusicsPlayList = new Schema({
   music: {type: Schema.Types.ObjectId, ref: 'Musics',
   required: true},
   playlist: {
     type: Schema.Types.ObjectId, ref: 'Albumens',
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
//upload collection music and albumens
schemaMusicsPlayList.pre('save',async function(next) {
  let music_id =this.music;
  let playlist_id =this.playlist;
 //call and count collection comment
 let musicCount = await this.constructor.countDocuments({status: 'active',music: music_id})+1;
 let music_update= await Musics.findByIdAndUpdate(music_id,{inplaylist: musicCount});

let playlistCount = await this.constructor.countDocuments({status: 'active',playlist: playlist_id})+1;
let playlist_update= await Albumes.findByIdAndUpdate(playlist_id,{musics_cout: playlistCount});


return next();

});


module.exports=mongoose.model('PlayList',schemaMusicsPlayList)
