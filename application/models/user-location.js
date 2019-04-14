const ModelUserLocation =require('./schemas/user-location.js')



async function createLocation(_loaction) {
    let location= await ModelUserLocation.create(_loaction);
    return location;
}



module.exports={
createLocation
}
