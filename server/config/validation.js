const {body, validationResult} = require("express-validator");

// for registration
exports.validateRegister = [
body('fullname') // field 1
.notEmpty().withMessage('Please write a name!Its empty') // test 1
.not().isEmail().withMessage('Full name can not be your Email!') // test 2
.not().isNumeric().withMessage('Full name can not be a Number!') //  test 3

,body('email') // field 2
.isEmail().withMessage('Its not an Email')
.not().isNumeric().withMessage('Full name can not be a Number!') 

,body('password') // field 3
.isLength({min:4, max:10}).withMessage('Password must be 4-10 characters!')
, (req, res)=>{
    const objectErrors = validationResult(req) //  object of array or empty array 
    if(!objectErrors.errors.length){
        res.json('You are successfully registered to my site!')
    }
    else{
        console.log(objectErrors.errors) 
        res.json(objectErrors.errors)
    } 
}
]

// for login
exports.validateLogin = [
body('email') 
.isEmail().withMessage('Its not an Email. Must contain @ and . ')
.not().isNumeric().withMessage('Email can not be a Number!') 

,body('password') // field 3
.isLength({min:4, max:10}).withMessage('Password must be 4-10 characters!')
,(req, res)=>{
    const objectErrors = validationResult(req) //  object of array or empty array 
    if(!objectErrors.errors.length){
        res.json('You are successfully Login to my site!')
    }
    else{
        console.log(objectErrors.errors) 
        res.json(objectErrors.errors)
    } 
}  
]