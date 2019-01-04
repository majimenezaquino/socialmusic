const schemaQualification =require('./schemas/qualification.js')



async function createQualification(_qualification) {
    let qualification= await schemaQualification.create(_qualification);
    return qualification;
}

async function getAllQualificationByMusic(_content) {
    let qualification= await schemaQualification.find({status: 'active',music_qualified: _content})
    .populate({ path: 'user_qualified', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'music_qualified', select: 'title' })
    return qualification;
}

async function getAllQualificationByMusicCount(_content) {
    let qualification= await schemaQualification.find({status: 'active',music_qualified: _content}).count();
    return qualification;
}


async function getAllQualificationByMusicAndUser(_content,_user) {
    let qualification= await schemaQualification.find({status: 'active',music_qualified: _content,user_qualified:_user})
    .populate({ path: 'user_qualified', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'music_qualified', select: 'title' })
    return qualification;
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
    createQualification,
    getAllQualificationByMusic,
    getAllQualificationByMusicAndUser,
    getAllQualificationByMusicCount
}
