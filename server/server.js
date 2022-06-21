// imports
const express = require('express'); 
const cors = require('cors');
const app = express();
require('dotenv').config()
const PORT = 5000 || process.env.PORT;
// encryption
const bcrypt = require('bcrypt')

/**
 * @validationResult: holds an array of errors inside
 */
const {body,validationResult} = require("express-validator");

// general settings and uses here
app.use(cors())
app.use(express.json())


// backend api routes import here
app.post('/auth/login', (req, res)=>{
    const password = "arif" // receive this password from client
    bcrypt.hash(password, 15, (err, hashedPassword)=>{
        res.json(hashedPassword)
    })
})



/**
 * routes: app.httpMethod(URL/Path/Endpoint, middleware, callback())
 * 1. http method:get, post, delete, patch, put, all
 * 2. some middleware(optional): express-validator or others
 * 3. callback(req, res)
 */
app.post('/auth/registration', 
// here should be validation code
// user must give an email or its error

body('fullname') // field 1
.notEmpty().withMessage('Please write a name!Its empty') // test 1
.not().isEmail().withMessage('Full name can not be your Email!') // test 2
.not().isNumeric().withMessage('Full name can not be a Number!') //  test 3

,body('email') // field 2
.isEmail().withMessage('Its not an Email')
.not().isNumeric().withMessage('Full name can not be a Number!') 

,body('password') // field 3
.isLength({min:4, max:10}).withMessage('Password must be 4-10 characters!')

// final callback(req, res)
,(req, res)=>{
    const objectErrors = validationResult(req) //  object of array or empty array 
    if(!objectErrors.errors.length){
        res.json('You are successfully registered to my site!')
    }
    else{
        console.log(objectErrors.errors) 
        res.json(objectErrors.errors)
    } 
})

app.listen(PORT, (req, res)=> {
    console.log('Start...Server is running successfully on port ' + PORT)
});
