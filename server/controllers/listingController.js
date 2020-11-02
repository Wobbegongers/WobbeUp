const db = require("../models/databaseModel");
const listingController = {};

listingController.addListing = (req,res,next) =>{
    // inserts new user using the locationid grabbed from first two queries
    let query = `insert into listings (name, price, user_id, location, category_id, description) values ($1, $2, $3, $4, $5, $6);`
    console.log('body: ', req.body)
    console.log('query: ', req.query)
    let params = [req.body.name, req.body.price, req.body.user_id, req.body.location, req.body.category_id, req.body.description]

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


listingController.findListing = (req, res, next) => {
    // console.log('inside findinglisting' , req)
    // search for every item that has the name we are looking for
    let name = '%' + req.query.name + '%'
    let query = `select * from listings where name like ($1) and category_id = ($2)`

    let params = [name, req.query.category_id]

    db.query(query, params, (err, result) => {
        if(err){
            // return status of 204 if something went wrong
            res.status(204)
            next()
        }
        else{
            // set the locals.items to the result of the query 
            res.locals.items = result.rows
            next()
        }
    })
}

listingController.findListingInAll = (req,res,next) =>{
    // console.log(req)

    let name = '%' + req.query.name + '%'
    let query = 'select * from listings where name like ($1)'
    let params = [name]
    db.query(query, params, (err, result) => {
        console.log('inside query')
        if(err){
            // return status of 204 if something went wrong
            console.log('Error')
            res.status(204)
            next()
        }
        else{
            // set the locals.items to the result of the query 
            console.log('found item', result)
            res.locals.items = result.rows
            next()
        }
    })
}


listingController.findAllListing = (req, res, next) => {
    // search for every item that has the name we are looking for
    let query = `select * from listings `
    let params = []

    db.query(query, params, (err, result) => {
        if(err){
            // return status of 204 if something went wrong
            res.status(204)
            next()
        }
        else{
            // set the locals.items to the result of the query 
            res.locals.items = result.rows
            next()
        }
    })
}

module.exports = listingController;
