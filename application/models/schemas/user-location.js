const mongoose=require('mongoose')
const Musics =mongoose.model('Musics'); //import schemas music


const Schema = mongoose.Schema;

const schemaUserLoation = new Schema({
user_location: {type: Schema.Types.ObjectId, ref: 'Users'},
coords: {
    latitude: String,
    longitude: String,
    accuracy: String,
    altitude: String,
    altitudeAccuracy: String,
    heading: String,
    speed: String,
  },
    timestamp: String,
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

// //upload collection music and albumens
// schemaUserLoation.pre('save',async function(next) {
//   let music_id =this.music_dedicated;
//   let playlist_id =this.playlist;
//  let music_update= await Musics.findByIdAndUpdate(music_id,{$inc:{"dedicated":1 }});
// return next();
//
// });

module.exports=mongoose.model('UserLocation',schemaUserLoation);
