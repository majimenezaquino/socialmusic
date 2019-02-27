const sharp =require('sharp');

const {UPLOADPATH}=require('../config/index')
function renderingImage (filename='',width=undefined, height=undefined,callback){

    let outputImageName , imagePath , outputImagePath;
  //renderizar image

        if(width===undefined && height===undefined){
          callback(filename);
          return true;
        }

        let fromPath = `${UPLOADPATH}/images/${filename}`;
        let toFile =`w${width}.h${height}.${filename}`;;
        let toPath=`${UPLOADPATH}/images/${toFile}`;




  sharp(fromPath)
  .resize(height, width, {
  kernel: sharp.kernel.nearest
  })
  .toFile(toPath,(err,info)=>{
    if(err){
      console.log("erro",err)
    }
    callback(toFile);
  
  });


}


module.exports={renderingImage};
