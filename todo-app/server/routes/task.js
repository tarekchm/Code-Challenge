const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const customer = require('../models/model');


router.post('/addCustomer', async (req, res)=>{
    const addCustomer= await new customer({phoneNumber: req.body.phoneNumber , name: req.body.name, address: req.body.address});

    try {
        const response = await addCustomer.save();
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});


router.get("/getall", async (req,res)=> {
    try {
        const tasks = await customer.find();
        res.send(tasks);
    } catch (error) {
        res.send(error)
        
    }

})

router.put("/:id", async (req, res)=>{
    try {
        const task= await customer.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(task)
    } catch (error) {
        res.send(error)
        
    }
})

router.delete("/:id", async(req, res)=>{
    try {
        const task= await customer.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.post("/phoneNumberValidation", async(req, res)=> {
    try {
        var requestOptions = {
         method: 'get',
         redirect: 'follow',
        headers: {"apikey":"xtKHBDAdGfReNEOmwPUkcpqKkxRRIVjF"}
        };

        const api = await fetch(`https://api.apilayer.com/number_verification/validate?number=${req.body.phoneNumber}`, requestOptions)
        const data= await api.json();
        var response = {countryCode:data.country_code, countryName:data.country_name, operatorName:data.carrier};
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});



module.exports = router;