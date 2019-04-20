const Privacies =require('./schemas/privacies');



async function createMusic(_music) {
    let music= await Privacies.create(_music);
    return music;
}



async function getAllPrivacies() {
    let privacy= await Privacies.find({status: 'active'})
    return privacy;
}

async function getAllPrivaciesByName(_name) {
    let privacy= await Privacies.find({status: 'active' ,name: _name})
    return privacy;
}

async function getAllPrivacyById(id) {
    let privacy= await Privacies.find({status: 'active', _id: id});
    return privacy;
}


module.exports={
    getAllPrivacies,
    getAllPrivacyById,
    getAllPrivaciesByName
}
