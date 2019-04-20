const Musics =require('./schemas/musics')
const Privacy =require('./schemas/privacies')



async function createMusic(_music) {
    let music= await Musics.create(_music);
    return music;
}



async function getAllMusics(_since,_limit) {

    let musics= await Musics.find({status: 'active'})
    .sort( { _id: -1 } )
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'genres', select: 'name' })
    .populate({ path: 'colaborations', select: ['name','last_name','profile_picture']})
    .populate({ path: 'privacy', select: ['name'] })
    .skip(_since)
    .limit(_limit);
    return musics;
}


async function getAllMusicsPublic(_since=0,_limit=0,privacy_name="públicas") {
   let _privacy= await Privacy.find({status: 'active', name: privacy_name});
    let musics= await Musics.find({status: 'active', privacy: _privacy[0]._id})
    .sort( { _id: -1 } )
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'genres', select: 'name' })
    .populate({ path: 'colaborations', select: ['name','last_name','profile_picture']})
    .populate({ path: 'privacy', select: ['name'] })
    .skip(_since)
    .limit(_limit);
    return musics;
}


async function getMusicById(music_id) {
  let music= await Musics.find({status: 'active', _id: music_id})
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
  .populate({ path: 'genres', select: 'name' })
  .populate({ path: 'colaborations', select: ['name','last_name','profile_picture']})
  .populate({ path: 'privacy', select: ['name'] })
  return music;
}


async function getMusicFileName(_name) {
  let music= await Musics.find({status: 'active', url: _name })
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
  .populate({ path: 'genre', select: 'name' })
  return music;
}


async function getMusicsByUser(user_id=undefined) {
  let music= await Musics.find({status: 'active', user_published: user_id})
  // .sort( { _id: -1 } )
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
  .populate({ path: 'genre', select: 'name' })
  return music;
}





async function getMusicsIncompleteByUser(user_id) {
  let music= await Musics.find({status: 'pending', user_published: user_id})
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
  .populate({ path: 'genre', select: 'name' })
  return music;
}


async function updateMusic(id,_music) {
    let musics= await Musics.findOneAndUpdate({_id:id},_music,{new: true});
    return musics;
}


async function deleteMusic(id,Music) {
    let Musics= await Musics.findOneAndUpdate({_id:id});
    return Musics;
}


async function countMusicDocuments(id) {
   let date =new Date();
    let musiccount= await Musics.countDocuments({
      user_published: id,
      status: "active",
    });
    return musiccount;
}

async function countMusicUploadByUserDays(user_id=0,days=30) {
   let date =new Date();
   let starDate =date.setDate(date.getDate()-days);

    let musiccount= await Musics.countDocuments({
     user_published: user_id,
      status: { $in: ["active", "pendings"] },
      "date_create": {"$gte": new Date(starDate), "$lt": new Date()}
    });
    return musiccount;
}

module.exports={
    createMusic,
    getAllMusics,
    getAllMusicsPublic,
    getMusicById,
    updateMusic
    ,getMusicsByUser,
    countMusicDocuments,
    countMusicUploadByUserDays,
    getMusicsIncompleteByUser,
    getMusicFileName
}
