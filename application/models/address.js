const Addresss =require('./schemas/address')

async function createAddress(_address) {
    let address= await Addresss.create(_address);
    return address;
}



async function getAllAddresss(_since=0,_limit=10) {


    let address= await Addresss.find({})
    .skip(_since).
    limit(_limit);
    return address;
}

async function getAddressById(id) {
    let address= await Addresss.findById(id)
    return address;
}

async function getAddressByUser(_user_id='') {
    let address= await Addresss.find({user: _user_id, status: 'active'})
    return address;
}


async function updateAddress(id,_address) {
   let address= await Addresss.findOneAndUpdate({_id:id},_address)
   return address;

}


async function disabledAddress(id) {
    let address= await Addresss.findByIdAndUpdate({_id:id},{status: 'disabled'})
    return address;
}



module.exports={
    createAddress,
    getAllAddresss,
    getAddressById,
    updateAddress,
    disabledAddress,
    getAddressByUser
}
