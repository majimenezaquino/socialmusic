const EntertainmentCenters =require('./schemas/entertainment-centers.js')



async function createEntertainmentCenters(_entertainmentCenters) {
    let entertainmentCenters= await EntertainmentCenters.create(_entertainmentCenters);
    return entertainmentCenters;
}

async function updateEntertainmentCenters(_id,_entertainmentCenters) {
    let entertainmentCenters= await EntertainmentCenters.create(_entertainmentCenters);
    return entertainmentCenters;
}


async function getAllEntertainmentCenters(_since=0, _limit=10) {
    let EntertainmentCenters= await EntertainmentCenters.find({status: 'active'})
    .skip(_since)
    .limit(_limit);
    return EntertainmentCenters;
}



module.exports={
    createEntertainmentCenters,
    getAllEntertainmentCenters,
    updateEntertainmentCenters
}
