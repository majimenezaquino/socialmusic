const mongoose=require('mongoose')



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



module.exports=mongoose.model('SongDedicate',schemaSongDedicate);
