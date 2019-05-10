const modelEntertainment =require('../models/entertainment-centers-days.js');
const {MONGO_DB_UIR,MONGO_DABASE_NAME}=require('./index');
 let weeks=
 [{name: "Lunes" ,laguage_code: "es"},
  {name: "Martes" ,laguage_code: "es"},
  {name: "Miércoles" ,laguage_code: "es"},
  {name: "Jueves" ,laguage_code: "es"},
  {name: "Viernes" ,laguage_code: "es"},
  {name: "Sábado" ,laguage_code: "es"},
  {name: "Domingo" ,laguage_code: "es"}
];


  // let entertainment =  modelEntertainment.createEntertainmentCentersDay(weeks);

//   var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db(MONGO_DABASE_NAME);
//
//   dbo.collection("EntertainmentCentersDay").insertOne(weeks, function(err, res) {
//     if (err) throw err;
//     db.close();
//   });
//
//
// });
