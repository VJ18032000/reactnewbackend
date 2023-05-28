const timesheetController=require('../controllers/timesheet')
const router =require('express').Router()

router.get('/timesheet',timesheetController.Detail)
router.post('/timesheet',timesheetController.create)


module.exports=router