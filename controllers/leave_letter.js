const db = require('../models')
const Leave = db.leave

const leaveDetail = async (req, res) => {
    let leave = await Leave.findAll()
    console.log(leave)
    if (leave == 0) {
        const resdata = {
            "status": "ERROR",
            "result": "Something went wrong..."
        }
        res.json(resdata)
    } else {
        const resdata = {
            "status": "OK",
            "result": leave
        }
        res.json(resdata)
    }
};
const create = (req, res) => {
    let info = {
        emp_id: req.body.emp_id,
        leave_type: req.body.leave_type,
        leave_date_from: req.body.leave_date_from,
        leave_date_to: req.body.leave_date_to,
        reason: req.body.reason,
        no_of_days:req.body.no_of_days
    }
    Leave.create(info)
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
    leaveDetail,
    create
}