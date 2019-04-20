const Fallowers =require('./schemas/followers.js')



async function createFallowers(_Fallowers) {
    let fallowers= await Fallowers.create(_Fallowers);
    return fallowers;
}

async function getAllFallowersByUser(_user=0,_since=0, _limit=10) {
    let fallowers= await Fallowers.find({status:'active' ,user_followee: _user})
    .populate({path: 'user_follower', select: ['name','last_name','profile_picture']})
    .populate({path: 'user_followee', select: ['name','last_name','profile_picture']})
    .skip(_since)
    .limit(_limit);
    return fallowers;
}

async function checkUserFAllowier(follower,followee){
    let fallowers= await Fallowers.countDocuments({user_followee: followee, user_follower: follower, status: 'active'});
    return fallowers;
}
//cont fallowers
async function getAllFallowersByUserCount(user_id) {
  let _fallowers= await Fallowers.countDocuments({user_follower: user_id, status: 'active'})
  let _fallowee= await Fallowers.countDocuments({user_followee: user_id, status: 'active'})
return {
  follower:_fallowers,
  followee:_fallowee,
};
}




async function getFallowersById(id,_since=0, _limit=10) {
    let album= await Fallowers.findById(id)
    .populate({path: 'user_published', select: ['name','last_name','profile_picture']})
    .skip(_since)
    .limit(_limit);
    return album;
}




async function updateFallowers(id,_Fallowers) {
    const album= await Fallowers.findOneAndUpdate({_id:id},_Fallowers);
    return album;
}


async function disabledFallowers(id) {
    //disabled genre
    let album= await Fallowers.findOneAndUpdate({_id:id} ,{status: 'disabled'})
    return album;
}



module.exports={
    disabledFallowers,
    checkUserFAllowier,
    updateFallowers,
    getFallowersById,
    getAllFallowersByUser,
    createFallowers,
    getAllFallowersByUserCount
}
