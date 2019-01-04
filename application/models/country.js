const Country =require('./schemas/countries')

async function getAllCountries(_since=0,_limit=10,_lenguage='en') {
   // _lenguage=_lenguage.toUpperCase()
    let country= await Country.find({lenguage: _lenguage})
    .skip(_since)
    .limit(_limit);
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
