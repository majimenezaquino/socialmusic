const express=require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
const app =express()
const {SERVER_PORT, MONGO_DB_UIR}=require('../application/config');


//parser require
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


//router principal api
app.use('/api',require('../application/routes/index'));

const server = app.listen(SERVER_PORT,()=>{

    console.log(`Server run in port ${SERVER_PORT}`)
});

mongoose.connect(MONGO_DB_UIR,{ useNewUrlParser: true }).then(()=>{

    server; //port
}).catch(err=>{
    console.log(`Error to  connect with db ${err}`)
})


//socket
 require('./socket.js')(server);
