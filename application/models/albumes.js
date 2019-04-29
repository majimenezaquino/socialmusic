const Albumes =require('./schemas/albumes')
const Privacy =require('./schemas/privacies')
const Followers =require('./schemas/followers')


async function createAlbumes(_Albumes) {
    let albumes= await Albumes.create(_Albumes);
    return albumes;
}

async function getAllAlbumesByUser(_user=0) {
    let albumes= await Albumes.find({user_published: _user, status: 'active'})
    .populate({path: 'user_published', select: ['name','last_name','profile_picture']})
    return albumes;
}

async function getAlbumesByUserAndName(_user=0,_name) {
    let albumes= await Albumes.find({user_published: _user, name: _name ,status: 'active'})
    .populate({path: 'user_published', select: ['name','last_name','profile_picture']})
    return albumes;
}


async function getAllAlbumes(user_id=0,_since=0, _limit=10) {
   let _privacy= await Privacy.find({status: 'active', name: "públicas"});
   let _privaci_follower= await Privacy.find({status: 'active', name: "Seguidores"});
   let follower_id =undefined;
   let   _followee= await Followers.find({status: 'active', user_follower: user_id});
   if(_followee.length>0){
     follower_id =_followee[0]._id;
   }
   //Seguidores
    let albumes= await Albumes.find({ status: 'active',$or:[{user_published: user_id},{privacy: _privacy[0]._id},{privacy: follower_id}] })
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
    const album= await Albumes.findOneAndUpdate({_id:id},_Albumes,{new: true});
    return album;
}


async function disabledAlbumes(id) {
    //disabled genre
    let album= await Albumes.findOneAndUpdate({_id:id} ,{status: 'disabled'},{new: true})
    return album;
}



module.exports={
    disabledAlbumes,
    updateAlbumes,
    getAllAlbumes,
    getAlbumesById,
    getAllAlbumesByUser,
    createAlbumes,
    getAllAlbumesByUserCount,
    getAlbumesByUserAndName
}
