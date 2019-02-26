const sharp =require('sharp');
const fs =require("fs")
const {UPLOADPATH}=require('../config/index')
function renderingImage (filename='',width=undefined, height=undefined,callback){

    let outputImageName , imagePath , outputImagePath;
  //renderizar image
        let path = `${UPLOADPATH}/images/`;

        if(width===undefined && height===undefined){
          return false;
        }


   imagePath = path+filename;
   let path_img=`w${width}.h${height}.${filename}`;
   outputImagePath = path+path_img;

  sharp(imagePath)
  .resize(height, width, {
  kernel: sharp.kernel.nearest
  })
  .toFile(outputImagePath)
  .then( (ImageResult) => {
  //eliminar imagen temporar

  fs.unlinkSync(imagePath);
  callback(path_img);
  })
  .catch ( (err) => {
    return err;
  });

}


module.exports={renderingImage};
