const ModelMusician =require('./schemas/musicians.js')
const ModelUsers=require('./schemas/users.js')



async function createMusician(_musician) {
    let musician= await ModelMusician.create(_musician);
    return musician;
}

async function getAllMusicians(_since=0,_limit=0) {
    let musicians= await ModelMusician.find({status: 'active'})
    .skip(_since)
    .limit(_limit);
    return musicians;
}




async function getMusicianById(id) {
  let musician= await ModelUsers.find({status: 'active',_id:id})
  .populate({ path: 'musicians', select: ['name','description','icon'] })
  .skip(_since)
  .limit(_limit);
  return musician;
}


module.exports={
    getMusicianById,
    getAllMusicians,
    createMusician
}
