const leaveController=require('../controllers/task')
const router =require('express').Router()

router.get('/emp/:emp_id',leaveController.viewByEmpId)
router.get('/emp/:emp_id/:name',leaveController.viewAttendance)
router.get('/task',leaveController.viewTask)
router.post('/task',leaveController.create)
router.get('/emp',leaveController.viewDetails)


module.exports=router