const Users =require('./schemas/users')

async function createUser(_user) {
    let user= await Users.create(_user);
    return user;
}

async function getAllUsers(_since=0,_limit=10) {


    let users= await Users.find({})
    .skip(_since).
    limit(_limit);
    return users;
}

async function getUserById(id) {
    let users= await Users.findById(id)
    return users;
}

async function getUserByEmailStatus(_email) {
    let users= await Users.find({email: _email, status: {$ne: "blocked" } })
    return users;
}


async function getUserPublicById(id) {
    let user= await Users.find({_id: id});
    return user;
}


async function updateUser(id,userdata) {
   let user= await Users.findOneAndUpdate({_id: id},userdata,{new: true});
   return user;

}


async function disabledUser(id) {
    let users= await Users.findByIdAndUpdate(id,{status: 'disabled'})
    return users;
}



module.exports={
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    disabledUser,
    getUserPublicById,
    getUserByEmailStatus
}
