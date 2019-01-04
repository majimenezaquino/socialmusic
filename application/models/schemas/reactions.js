const mongoose=require('mongoose')


const Music =mongoose.model('Musics'); //import schemas music
const Schema = mongoose.Schema;

const schemaReactions = new Schema({
type_reaction:{ type: String, enum: ['like','dislike','more_less'], required: true},
user_reacted: {type: Schema.Types.ObjectId, ref: 'Users'},
music_reacted:{type: Schema.Types.ObjectId, ref: 'Musics'},
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
//increment  reaction field  of  musics colletion  when user created reaction
schemaReactions.pre('save',async function(next) {
let music_id =this.music_reacted;
let music_update= await Music.findByIdAndUpdate({_id: music_id }, {$inc:{reactions:1}});
return next();
});




module.exports=mongoose.model('Reactions',schemaReactions)
