const express=require('express')
const router =express.Router();
const City=require('../controller/cities')
const Country=require('../controller/country')
const Files=require('../controller/filesController')
const FilesDownload=require('../controller/download.js')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router countries
router.get('/countries',[authentication],Country.getAllCountries)
router.get('/country/:id',[authentication],Country.getCountryById)
router.get('/countriescode',[authentication],Country.getAllCountriesCode)
//route tu services files
router.get('/files/:type/:name',Files.getFiles)
router.get('/download/:type/:name',[authentication],FilesDownload.getFiles)

//router City
router.get('/city/:code?',[authentication],City.getAllcities)
router.get('/city/:id',[authentication],City.getCityById)
//router.post('/city',City.createCity)
// router.put('/city/:id',[authentication,checkAdminRol],City.updateCity)
// router.get('/city/:id',[authentication,checkAdminRol],City.getCityById)
// router.delete('/city/:id',[authentication,checkAdminRol],City.disabledCity)
module.exports=router;
