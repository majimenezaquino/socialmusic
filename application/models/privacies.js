const Privacies =require('./schemas/privacies');



async function createMusic(_music) {
    let music= await Privacies.create(_music);
    return music;
}



async function getAllPrivacies() {
    let privacy= await Privacies.find({status: 'active'})
    return privacy;
}


module.exports={
    getAllPrivacies
}
