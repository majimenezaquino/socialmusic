const MusicsPlayList =require('./schemas/playlist')



async function createMusicsPlayList(_listMusic) {
    let playlist= await MusicsPlayList.create(_listMusic);
    return playlist;
}

async function getPlayListByAlbum(_playlist=0,_user=0,_since=0, _limit=10) {
    let playlist= await MusicsPlayList.find({playlist: _playlist,user_published: _user ,status: 'active'}).
    populate({path: 'music', select: ['title','privacy','author','description','url','img']})
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
    .skip(_since)
    .limit(_limit);
    return playlist;
}


async function getPlayListByAlbumCount(_playlist=0) {
    let playlist= await MusicsPlayList.find({playlist: _playlist ,status: 'active'}).
      count();
    return playlist;
}

async function getMusicsPlayListById(id) {
    let genres= await MusicsPlayList.findById(id);
    return genres;
}




async function updateMusicsPlayList(id,_playlist) {
    const playlist= await MusicsPlayList.findByIdAndUpdate(id,_playlist);
    return playlist;
}


async function disabledMusicsPlayList(id) {
    //disabled genre
    let playList= await MusicsPlayList.findByIdAndUpdate(id ,{status: 'disabled'})
    return playList;
}



module.exports={
    disabledMusicsPlayList,
    updateMusicsPlayList,
    getMusicsPlayListById,
    getPlayListByAlbum,
    createMusicsPlayList,
    getPlayListByAlbumCount
}
