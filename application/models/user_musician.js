const ModelUserMusician =require('./schemas/user_musician.js')




async function createUserMusician(_musician) {
    let userMusician= await ModelUserMusician.create(_musician);
    return userMusician;
}

async function getAllUserMusicians(_since=0,_limit=0) {
  let userMusicians= await ModelUserMusician.find({status: 'active'})
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'musicians.musician', select: ['name','description','icon'] })

    .skip(_since)
    .limit(_limit);
    return userMusicians;
}



async function getUserMusicianByUserAndMusician(user_id,_musician) {

    let userMusicians= await ModelUserMusician.find({status: 'active',user_published:user_id,musician:_musician})
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'musicians.musician', select: ['name','description','icon'] })

    return userMusicians;
}




async function getUserMusicianByMusician(_musician='',_since=0,_limit=10) {
  let userMusicians= await ModelUserMusician.find({status: 'active',musician:_musician})
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
  .populate({ path: 'musician', select: ['name','description','icon'],match:{
    name: _musician
  } })
  .skip(_since)
  .limit(_limit);
  return userMusicians;
}


async function getMusicianByUser(user_id=undefined) {
  let userMusicians= await ModelUserMusician.find({status: 'active',user_published: user_id})
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
 .populate({ path: 'musicians.musician', select: ['name','description','icon'] })
  return userMusicians;
}


async function musicianSearch(keyfor) {
  let userMusicians= await ModelUserMusician.find({status: 'active',user_published: user_id})
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
 .populate({ path: 'musicians.musician', select: ['name','description','icon'] })
  return userMusicians;
}



async function updateUserMusician(id,_musician) {
    let userMusician= await ModelUserMusician.findOneAndUpdate({_id: id},_musician,{new: true});
    return userMusician;
}

async function deleteUserMusician(id) {
    let userMusician= await ModelUserMusician.findOneAndUpdate({_id: id},{status: 'disabled'},{new: true});
    return userMusician;
}

module.exports={
    createUserMusician,
    getAllUserMusicians,
    getMusicianByUser,
    getUserMusicianByMusician,
    getUserMusicianByUserAndMusician,
    updateUserMusician,
    deleteUserMusician
}
