const SongComments =require('./schemas/song_comment')



async function createSongComment(_comment) {
    let comment= await SongComments.create(_comment);
    return comment;
}

async function getAllSongComments() {
    let musics= await SongComments.find({status: 'active',privacy: 'public'})
    .populate({ path: 'user_public', select: ['name','last_name','profile_picture'] })
    return musics;
}

async function getAllSongCommentsByMusic(_music) {
    let songcomments= await SongComments.find({status: 'active',music_commented: _music})
    .populate({ path: 'user_commented', select: ['name','last_name','profile_picture'] })
    .sort({_id:-1})
    return songcomments;
}

async function getCountSongCommentsByMusic(_music) {
    let songcomments= await SongComments.find({status: 'active',music_commented: _music}).count();
    return songcomments;
}

async function getAllSongCommentsByUserCommented(_user) {
    let songcomments= await SongComments.find({status: 'active',user_commented: _user})
    .populate({ path: 'music_commented', select: ['title','url'] })
    return songcomments;
}



async function updateSongComment(id,_comment) {

    let songComment= await SongComments.findByIdAndUpdate(id,_comment)
    return songComment;
}


async function deleteSongComment(id) {
    console.log(id)
    let songComment= await SongComments.findByIdAndUpdate(id,{status: 'disabled'})
    return songComment;
}



module.exports={
    createSongComment,
    getAllSongComments,
    getAllSongCommentsByMusic,
    getAllSongCommentsByUserCommented,
    getCountSongCommentsByMusic,
    updateSongComment,
    deleteSongComment
}
