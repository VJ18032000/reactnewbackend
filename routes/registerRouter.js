const registerController=require('../controllers/registerController.js')
const router =require('express').Router()

router.post('/register',registerController.addregisteration)
router.post('/login',registerController.getlogin)

router.get('/email/:email',registerController.getregisteremail)
router.put('/email/password/:email',registerController.updatepassword)
router.put('/email/:email',registerController.updateregisteremail)
router.put('/email/upload/:email',registerController.imageupload)

module.exports=router