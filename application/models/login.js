const Users =require('./schemas/users')



async function getUserLogin(_email,_pass) {
    let users= await Users.find({email:_email,password:_pass});
    return users;
}




module.exports={getUserLogin}