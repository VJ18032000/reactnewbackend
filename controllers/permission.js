const db = require('../models')
const Permission = db.permission

const getpermission = async (req, res) => {
    let permission = await Permission.findAll()
    console.log(permission)
    if (permission == 0) {
        const resdata = {
            "status": "ERROR",
            "result": "Something went wrong..."
        }
        res.json(resdata)
    } else {
        const resdata = {
            "status": "OK",
            "result": permission
        }
        res.json(resdata)
    }
};
const create = (req, res) => {
    let info = {
        emp_id: req.body.emp_id,
        leave_type: req.body.leave_type,
        date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        reason: req.body.reason
    }
    Permission.create(info)
    .then((result)=>{
        const resdata = {
            "status": "OK",
            "result": result
        }
        res.json(resdata)
    }).catch((err)=>{
        const resdata = {
            "status": "ERROR",
            "result": err
        }
        res.json(resdata)
    })


}

module.exports = {
    getpermission,
    create
}