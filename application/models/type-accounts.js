const schemaTypeAccounts =require('./schemas/type-accounts.js')



async function createTypeAccounts(_typeaccount) {
    let typeaccount= await schemaTypeAccounts.create(_typeaccount);
    return typeaccount;
}



async function getTypeAccounts() {
    let typeAccounts= await schemaTypeAccounts.find({status: 'active'})
    return typeAccounts;
}



async function updateTypeAccounts(id,_typeaccount) {
    let typeaccounts= await schemaTypeAccounts.findOneAndUpdate({_id: id},_typeaccount,{new: true})
    return typeaccounts;
}
//
//
// async function updateMusic(id,_music) {
//     let musics= await Musics.findByIdAndUpdate(id,_music)
//     return musics;
// }
//
//
// async function deleteMusic(id,Music) {
//     let Musics= await Musics.findByIdAndUpdate(id)
//     return Musics;
// }



module.exports={
    createTypeAccounts,
    getTypeAccounts,
    updateTypeAccounts
}
