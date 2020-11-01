const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// make the route
// define which middleware to use
// return some result



router.get('/login', userController.login, (req, res) => {
    if(res.locals.found){
        console.log('finished login')
        res.status(200)
        res.send()
    }
    else{
        console.log('failed login')
        // status 201 defines no user found
        res.status(201)
        res.send()
    }
    
})



router.post('/signup', userController.addUser, (req,res) => {
    console.log('user added')
    res.status(200)
    res.send()
})



module.exports = router;
