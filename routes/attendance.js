const attendanceController=require('../controllers/attendance')
const router =require('express').Router()

router.get('/attendance',attendanceController.view)
router.post('/attendance',attendanceController.create)


module.exports=router