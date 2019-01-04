const Albumes =require('./schemas/albumes')



async function createAlbumes(_Albumes) {
    let albumes= await Albumes.create(_Albumes);
    return Albumes;
}

async function getAllAlbumesByUser(_user=0,_since=0, _limit=10) {
    let albumes= await Albumes.find({user_published: _user, status: 'active'})
    .populate({path: 'user_published', select: ['name','last_name','profile_picture']})
    .skip(_since)
    .limit(_limit);
    return albumes;
}

async function getAllAlbumesByUserCount(_user=0,) {
    let albumes= await Albumes.find({user_published: _user, status: 'active'}).count();
    return albumes;
}


async function getAlbumesById(id,_since=0, _limit=10) {
    let album= await Albumes.findById(id)
    .populate({path: 'user_published', select: ['name','last_name','profile_picture']})
    .skip(_since)
    .limit(_limit);
    return album;
}




async function updateAlbumes(id,_Albumes) {
    const album= await Albumes.findOneAndUpdate({_id:id},_Albumes);
    return album;
}


async function disabledAlbumes(id) {
    //disabled genre
    let album= await Albumes.findOneAndUpdate({_id:id} ,{status: 'disabled'})
    return album;
}



module.exports={
    disabledAlbumes,
    updateAlbumes,
    getAlbumesById,
    getAllAlbumesByUser,
    createAlbumes,
    getAllAlbumesByUserCount
}
