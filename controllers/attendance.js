const db = require('../models')
const Attendance = db.attendance

const view = async (req, res) => {
    let attendance = await Attendance.findAll()
    console.log(attendance)
    if (attendance == 0) {
        const resdata = {
            "status": "ERROR",
            "result": "Something went wrong..."
        }
        res.json(resdata)
    } else {
        const resdata = {
            "status": "OK",
            "result": attendance
        }
        res.json(resdata)
    }
};
const create = (req, res) => {
    let info = {
        emp_id: req.body.emp_id,
        punch_in: req.body.punch_in,
        punch_out: req.body.punch_out,
        date: req.body.date,
        work_hours:req.body.work_hours
    }
    Attendance.create(info)
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

const view_byid = async (req, res) => {
    const emp_id=req.body.emp_id
    let attendance = await Attendance.find({emp_id:emp_id})
    console.log(attendance)
    if (attendance == 0) {
        const resdata = {
            "status": "ERROR",
            "result": "Something went wrong..."
        }
        res.json(resdata)
    } else {
        const resdata = {
            "status": "OK",
            "result": attendance
        }
        res.json(resdata)
    }
};

module.exports = {
    view,
    create
}