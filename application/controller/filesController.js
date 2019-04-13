
const fs =require('fs')
const {PATH_FILES}=require('../config/index')

function getFiles(req,res){
let typeFile=   req.params.type;
let filename=   req.params.name;
//type files allower

let pathFiles;

if(typeFile=='music'){
 pathFiles = `${PATH_FILES}/musics/${filename}`;
}else if(typeFile=='image'){
 pathFiles = `${PATH_FILES}/images/${filename}`;
}


if(fs.existsSync(pathFiles)){
 res.sendFile(pathFiles)
// res.download(pathFiles)
}else{
  res.status(404).json({
    error: true,
    fileurl: pathFiles,
    message: 'file not found'
  })
}
}

module.exports={
  getFiles
}
