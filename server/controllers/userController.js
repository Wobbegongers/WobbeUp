const db = require("../models/databaseModel");
const userController = {};



userController.login = (req,res,next) => {
    let query = `SELECT username, password FROM users WHERE username = ($1) AND password = ($2);`
    let params = [req.body.username, req.body.password];

    db.query(query, params, (err, result) => {
        if(result.rows.length === 0){
            console.log('User not found')
            res.locals.found = false
            next()
        }
        else{
            console.log(result)
            res.locals.found = true
            next()
        }
       
    })
}






userController.addUser = (req,res,next) =>{

    // inserts new user using the locationid grabbed from first two queries
    let query = `insert into users (username, password, location, real_name) values ($2, $3, $4, $1);`
    let params = [req.body.real_name, req.body.username, req.body.password, req.body.location]

    db.query(query, params, (err, result)=>{
        if(err){
            console.log(err)
            next()
        }
        else{
            console.log(result)
            next()
        }
    })
}






module.exports = userController;
