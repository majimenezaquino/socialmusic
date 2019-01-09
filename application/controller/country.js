
const modelCountry =require('../models/country')



async function getAllCountries(req, res) {
    try{

        let page_limit =10;
        let page_since =req.query.id || 0;
     const countries = await modelCountry.getAllCountries()
     res.json({
        error: false,
        message: 'surccess',
        countries

    })

    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }
    async function getAllCountriesCode(req, res) {
        try{
            let page_limit =10;
            let page_since =req.query.id || 0;
         const countries = await modelCountry.getAllCountriesCode(page_since,page_limit)
         res.json({
            error: false,
            message: 'surccess',
            countries

        })

        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }


    async function getCountryById(req, res) {
        try{
         let id =req.params.id || 0;
         const country = await modelCountry.getCountryById(id);
         res.json({
            error: false,
            message: 'surccess',
            country

        })

        }catch(ex){
            res.status(400).json({
                error: true,
                message: ex

            })
        }
        }




module.exports={
    getAllCountries,
    getCountryById,
    getAllCountriesCode
}
