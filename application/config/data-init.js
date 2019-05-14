const modelEntertainment =require('../models/entertainment-centers-days.js');
const {MONGO_DB_UIR,MONGO_DABASE_NAME}=require('./index');
//data statica
 let weeks=
 [{name: "Lunes" ,laguage_code: "es"},
  {name: "Martes" ,laguage_code: "es"},
  {name: "Miércoles" ,laguage_code: "es"},
  {name: "Jueves" ,laguage_code: "es"},
  {name: "Viernes" ,laguage_code: "es"},
  {name: "Sábado" ,laguage_code: "es"},
  {name: "Domingo" ,laguage_code: "es"}
];




module.exports = async function(){
  //set data date
   let days =  await modelEntertainment.getAllEntertainmentCentersDay("es");
  if(!days.length>0){
    let entertainment =  await modelEntertainment.createEntertainmentCentersDay(weeks);
  }

}
