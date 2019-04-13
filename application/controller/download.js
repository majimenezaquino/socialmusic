const modelMusic= require('../models/musics');
const fs =require('fs')
const {PATH_FILES}=require('../config/index')
async function getFiles(req,res){
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
 //res.sendFile(pathFiles)
      let music =await modelMusic.getMusicFileName(req.params.name);
      if(music[0].download_allowed){
        let newdownload=parseInt(music[0].downloaded+1);
      let music_up=  await modelMusic.updateMusic(music[0]._id,{downloaded: newdownload});
        res.download(pathFiles)
        console.log(music_up)
      }
      console.log("download",music);

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
