const leaveController=require('../controllers/leave_letter')
const router =require('express').Router()

router.get('/leave',leaveController.leaveDetail)
router.post('/leave',leaveController.create)


module.exports=router