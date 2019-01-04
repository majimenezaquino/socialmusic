const Cities =require('./schemas/cities')



async function getAllCities(_country='') {
    _country=_country.toUpperCase()
    let cities= await Cities.find({country: _country});
    return cities;
}

async function getCityById(id) {
    let city= await Cities.findById(id);
    return city;
}





module.exports={
    getAllCities,
    getCityById
}