const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController");





router.post('/create', listingController.addListing, (req,res) => {
    res.status(200)
    res.send()
})


router.get('/search', listingController.findListing, (req, res) =>{
    // if there was an error in the query then respond with 204
    if(res.status === 204){
        console.log('error')
        res.send()
    }
    else{
        // sends back the items that were found in the query 
        console.log(res.locals.items)
        res.json(res.locals.items)
    }
})

router.get('/searchall', listingController.findListingInAll, (req,res) =>{
    if(res.status === 204){
        console.log('error')
        res.send()
    }
    res.json(res.locals.items)
})



router.get('/all', listingController.findAllListing, (req, res) =>{
    // if there was an error in the query then respond with 204
    if(res.status === 204){
        console.log('error')
        res.send()
    }
    else{
        // sends back the items that were found in the query 
        console.log(res.locals.items)
        res.json(res.locals.items)
    }
})











module.exports = router;
