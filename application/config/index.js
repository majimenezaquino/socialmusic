const path =require('path')
const SERVER_PORT= process.env.PORT || 3001;
const MONGO_DABASE_NAME = 'socialmusic';
// const MONGO_DB_UIR= 'mongodb://majimenez:Mja25192519#@ds137763.mlab.com:37763/socialmusic';
//const MONGO_DB_UIR= 'mongodb://majimenez:Mja25192519#@ds137763.mlab.com:37763/'+MONGO_DABASE_NAME;
const MONGO_DB_UIR= 'mongodb://localhost:27017/'+MONGO_DABASE_NAME;
const PASS_KEY='@##@$$$$$@fkkfa$;;$%^&*';
const PATH_FILES =path.resolve(__dirname,`../../application/uploads`);
const UPLOADPATH =`./application/uploads`;


module.exports={
    SERVER_PORT,
    MONGO_DB_UIR,
    PASS_KEY,
    PATH_FILES,
    UPLOADPATH,
    MONGO_DABASE_NAME
}
