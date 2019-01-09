const Country =require('./schemas/countries')

async function getAllCountries() {
    let country= await Country.find({})
    return country;
}

async function getAllCountriesCode(_since=0,_limit=10) {
    let country= await Country.find()
    .skip(_since)
    .limit(_limit);
    return country;
}

async function getCountryById(id) {
    let city= await Country.findById(id);
    return city;
}





module.exports={
    getAllCountries,
    getCountryById,
    getAllCountriesCode
}
