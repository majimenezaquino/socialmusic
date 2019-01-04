const schemaReactions =require('./schemas/reactions.js')
const ModelMusic =require('./schemas/musics.js')



async function createReaction(_reaction) {
    let reaction= await schemaReactions.create(_reaction);
    return reaction;
}

async function getAllreactionsByMusic(_content) {
    let reaction= await schemaReactions.find({music_reacted: _content})
    .populate({ path: 'user_reacted', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'music_reacted', select: 'title' })
    return reaction;
}


async function getAllreactionsByMusicAndUser(_content,_user) {
    let reaction= await schemaReactions.find({music_reacted: _content,user_reacted:_user})
    .populate({ path: 'user_reacted', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'music_reacted', select: 'title' })
    return reaction;
}

//toggle status reaction and reset reactions nomber from music
  async function updateReaction(id) {
    let reaction= await schemaReactions.find({_id: id});
    let music_id =reaction[0].music_reacted;
    let  reaction_update = undefined;
    let stats =reaction[0].status;
   if(reaction[0].status=='active'){
     reaction_update= await schemaReactions.findOneAndUpdate({_id: id},{status: 'disabled'},{new: true});
   let  reactionMusic= await ModelMusic.findOneAndUpdate( {_id: music_id}, {$inc: {reactions:-1}});
   }else{
     reaction_update= await schemaReactions.findOneAndUpdate({_id: id},{status: 'active'},{new: true});
   let  reactionMusic= await ModelMusic.findOneAndUpdate({_id: music_id}, {$inc: {reactions:1}});
   }

  return reaction_update;
}



module.exports={
    createReaction,
    getAllreactionsByMusic,
    getAllreactionsByMusicAndUser,
    updateReaction
}
