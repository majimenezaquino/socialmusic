const Musics =require('./schemas/musics')



async function createMusic(_music) {
    let music= await Musics.create(_music);
    return music;
}



async function getAllMusics(user_id=undefined,_since,_limit) {
    let musics= await Musics.find({status: 'active',privacy: 'public'})
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'genre', select: 'name' })
    .skip(_since)
    .limit(_limit);
    return musics;
}


async function getMusicById(music_id) {
  let music= await Musics.find({status: 'active',privacy: 'public', _id: music_id})
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
  .populate({ path: 'genre', select: 'name' })
  return music;
}


async function getMusicsByUser(user_id='',_since=0,_limit=10) {
  let music= await Musics.find({status: 'active',privacy: 'public', user_published: user_id})
  .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] })
  .populate({ path: 'genre', select: 'name' })
  .skip(_since)
  .limit(_limit);
  return music;
}


async function updateMusic(id,_music) {
    let musics= await Musics.findOneAndUpdate({_id:id},_music);
    return musics;
}


async function deleteMusic(id,Music) {
    let Musics= await Musics.findOneAndUpdate({_id:id});
    return Musics;
}


// async function countMusicDocuments(id) {
//    let date =new Date();
//
//     let musiccount= await Musics.countDocuments({
//       // user_published: id,
//       status: "active",
//       date_create: {"$gte": new Date('2018-09-26T00:13:57.945Z'), "$lt": new Date()}
//     });
//     return musiccount;
// }

async function countMusicUploadByUserDays(id=0,days=30) {
   let date =new Date();
   let starDate =date.setDate(date.getDate()-days);

    let musiccount= await Musics.countDocuments({
     user_published: id,
      status: "active",
      "date_create": {"$gte": new Date(starDate), "$lt": new Date()}
    });
   console.log(new Date(starDate),"=====",new Date())
    return musiccount;
}

module.exports={
    createMusic,
    getAllMusics,
    getMusicById,
    updateMusic
    ,getMusicsByUser,
    countMusicUploadByUserDays
}
