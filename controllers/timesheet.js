const db = require('../models')
const Timesheet = db.timesheet

const Detail = async (req, res) => {
    let timesheet = await Timesheet.findAll()
    console.log(timesheet)
    if (timesheet == 0) {
        const resdata = {
            "status": "ERROR",
            "result": "Something went wrong..."
        }
        res.json(resdata)
    } else {
        const resdata = {
            "status": "OK",
            "result": timesheet
        }
        res.json(resdata)
    }
};
const create = (req, res) => {
    let info = {
        emp_id: req.body.emp_id,
        start: req.body.start,
        to: req.body.to,
        what_has_done: req.body.what_has_done,
        project_name: req.body.project_name,
        date:req.body.date,
        break:req.body.break
    }
    Timesheet.create(info)
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
    Detail,
    create
}