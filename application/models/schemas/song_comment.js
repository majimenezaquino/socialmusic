const mongoose=require('mongoose')



const Schema = mongoose.Schema;
const Musics =mongoose.model('Musics'); //import schemas music
const schemaSongComment = new Schema({
comment_message:{ type: String, required:true},
user_commented: {type: Schema.Types.ObjectId, ref: 'Users'},
music_commented:{type: Schema.Types.ObjectId, ref: 'Musics'},
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

schemaSongComment.pre('save',async function(next) {
  let music_id =this.music_commented;
 //call and count collection comment
  let count_commet = await this.constructor.countDocuments({status: 'active',music_commented: music_id})+1;
   let music_update= await Musics.findByIdAndUpdate(music_id,{commentes_count: count_commet});
return next();

});

module.exports=mongoose.model('SongComment',schemaSongComment)
