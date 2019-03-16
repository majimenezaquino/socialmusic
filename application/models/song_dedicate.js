const schemaSongDedicate =require('./schemas/song_dedicate.js')



async function createSongDedicate(_SongDedicate) {
    let SongDedicate= await schemaSongDedicate.create(_SongDedicate);
    return SongDedicate;
}

async function getAllSongDedicatedByUserReceive(_user) {
    let SongDedicate= await schemaSongDedicate.find({status: 'active',user_receive: _user})
    .populate({ path: 'user_receive', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'user_dedicated', select: ['name','last_name','profile_picture']})
    .populate({ path: 'music_dedicated', select: ['title','url'] })
    return SongDedicate;
}



async function getAllSongDedicatedByUserDedicated(_user) {
    let SongDedicate= await schemaSongDedicate.find({status: 'active',user_dedicated: _user})
    .populate({ path: 'user_receive', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'user_dedicated', select: ['name','last_name','profile_picture']})
    .populate({ path: 'music_dedicated', select: ['title','url'] })
    return SongDedicate;
}


async function getAllSongDedicatesByMusicAndUser(_content,_user) {
    let SongDedicate= await schemaSongDedicate.find({status: 'active',music_reacted: _content,user_reacted:_user})
    .populate({ path: 'user_receive', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'music_reacted', select: 'title' })
    return SongDedicate;
}

// async function getMusicById(id) {
//     let Musics= await Musics.findById(id)
//     return Musics;
// }
//
//
// async function updateMusic(id,_music) {
//     let musics= await Musics.findByIdAndUpdate(id,_music)
//     return musics;
// }
//
//
// async function deleteMusic(id,Music) {
//     let Musics= await Musics.findByIdAndUpdate(id)
//     return Musics;
// }



module.exports={
    createSongDedicate,
    getAllSongDedicatesByMusicAndUser,
    getAllSongDedicatedByUserReceive,
    getAllSongDedicatedByUserDedicated
}
