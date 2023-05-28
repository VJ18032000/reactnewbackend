const loginController=require('../controllers/loginController.js')
const router =require('express').Router()

router.post('/login',loginController.getlogin)


module.exports=router