const  getLocation =async function (req, res, next) {
  const iplocation = require("iplocation").default;
    let location=await iplocation('152.0.97.61');
    req.location = location;
  next();

};

module.exports ={getLocation};
