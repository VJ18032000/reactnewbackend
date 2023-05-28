const permissionController=require('../controllers/permission')
const router =require('express').Router()

router.get('/permission',permissionController.getpermission)
router.post('/permission',permissionController.create)


module.exports=router