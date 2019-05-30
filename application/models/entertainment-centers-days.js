const EntertainmentCentersDay =require('./schemas/entertainment-centers-days.js')



async function createEntertainmentCentersDay(_entertainmentCenters) {
    let entertainmentCenters= await EntertainmentCentersDay.create(_entertainmentCenters);
    return entertainmentCenters;
}

async function updateEntertainmentCentersDay(_id,_entertainmentCenters) {
    let entertainmentCenters= await EntertainmentCentersDay.find(_entertainmentCenters);
    return entertainmentCenters;
}


async function getAllEntertainmentCentersDay(_language =undefined) {
    let entertainmentCentersDay= await EntertainmentCentersDay.find({laguage_code: _language })
    .sort({_id: 1});
    return entertainmentCentersDay;
}



module.exports={
    createEntertainmentCentersDay,
    getAllEntertainmentCentersDay,
    updateEntertainmentCentersDay
}
