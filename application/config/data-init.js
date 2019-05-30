const modelEntertainment =require('../models/entertainment-centers-days.js');
const {MONGO_DB_UIR,MONGO_DABASE_NAME}=require('./index');
//data statica
 let weeks=
 [{name: "Lunes" ,laguage_code: "es", open:false},
  {name: "Martes" ,laguage_code: "es", open:false},
  {name: "Miércoles" ,laguage_code: "es", open:false},
  {name: "Jueves" ,laguage_code: "es", open:false},
  {name: "Viernes" ,laguage_code: "es", open:false},
  {name: "Sábado" ,laguage_code: "es", open:false}, 
  {name: "Domingo" ,laguage_code: "es", open:false} 
];




module.exports = async function(){
  //set data date
   let days =  await modelEntertainment.getAllEntertainmentCentersDay("es");
  if(!days.length>0){
    let entertainment =  await modelEntertainment.createEntertainmentCentersDay(weeks);
  }

}
