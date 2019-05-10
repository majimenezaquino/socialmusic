const EntertainmentCentersDay =require('./schemas/entertainment-centers-days.js')



async function createEntertainmentCentersDay(_entertainmentCenters) {
    let entertainmentCenters= await EntertainmentCentersDay.create(_entertainmentCenters);
    return entertainmentCenters;
}

async function updateEntertainmentCentersDay(_id,_entertainmentCenters) {
    let entertainmentCenters= await EntertainmentCentersDay.find(_entertainmentCenters);
    return entertainmentCenters;
}


async function getAllEntertainmentCentersDay(_since=0, _limit=10) {
    let EntertainmentCentersDay= await EntertainmentCentersDay.find({status: 'active'})
    .skip(_since)
    .limit(_limit);
    return EntertainmentCentersDay;
}



module.exports={
    createEntertainmentCentersDay,
    getAllEntertainmentCentersDay,
    updateEntertainmentCentersDay
}
