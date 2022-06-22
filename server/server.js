// imports
const express = require('express'); 
const cors = require('cors');
const app = express();
require('dotenv').config()
const PORT = 5000 || process.env.PORT;

/**
 * @validationResult: holds an array of errors inside
 */
const {validationResult} = require("express-validator");
const { validateRegister, validateLogin } = require('./config/validation');

// general settings and uses here
app.use(cors())
app.use(express.json())


// backend api routes import here

/**
 * routes: app.httpMethod(URL/Path/Endpoint, middleware, callback())
 * 1. http method:get, post, delete, patch, put, all
 * 2. some middleware(optional): express-validator or others
 * 3. callback(req, res)
 */

app.post('/auth/registration', validateRegister)

app.post('/auth/login', validateLogin)

app.listen(PORT, (req, res)=> {
    console.log('Start...Server is running successfully on port ' + PORT)
});
