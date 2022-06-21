# loginsystem
full stack login authentication system

## How to do it
# step 01:
- create server folder and install express, cors, dotenv, bcrypt, express-validator etc
like that: npm i express cors dotenv bcrypt 
- create a server and do settings for express cors dotenv bcrypt by looking into mycode or below hints
-**please do not copy paste :)

# step 02
- create a route for server where you may post registration data from client
- use the middleware express-validator inside the routes as my code
- format: app.httpMethod(URL/Path/Endpoint, middleware, callback())

# step 03:
- add this code inside routes callback : const objectErrors = validationResult(req)
- console and res.json() objectErrors using postman and try to understand what happens
# Step 04:
- install reactjs inside client folder
- add proxy for backend inside client/package.json
- make a registration form using reacstrap.com and react components
- track the form data inside onClick handler of your choice 
- send these form data to backend using fetch or axios
- display errors from backend to frontend
- display success messages if no errors

# Step 05:
- Like step 02 and 03 make sililar validation for login also as: /auth/login routes
- display error or success in login form as well

# hints:
## how to set cors policy in backend
const cors = require('cors');
app.use(cors())

##  how to set dotenv
create a file   called   .env 
put this inside server.js:    require('dotenv').config()

## how to set express validator
const {body,validationResult} = require("express-validator");

## how to get only json data from client
app.use(express.json())






