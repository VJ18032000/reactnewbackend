
const db = require('../models')
const Task = db.task
const Permission = db.permission
const Attendance = db.attendance
const Timesheet = db.timesheet
const Employee = db.register
const viewTask = async (req, res) => {
    let task = await Task.findAll()
    console.log(task)
    if (task == 0) {
        const resdata = {
            "status": "ERROR",
            "result": "Something went wrong..."
        }
        res.json(resdata)
    } else {
        const resdata = {
            "status": "OK",
            "result": task
        }
        res.json(resdata)
    }
};
const create = (req, res) => {
    let info = {
        emp_id: req.body.emp_id,
        task: req.body.task,
        date: req.body.date
    }
    Task.create(info)
        .then((result) => {
            const resdata = {
                "status": "OK",
                "result": result
            }
            res.json(resdata)
        }).catch((err) => {
            const resdata = {
                "status": "ERROR",
                "result": err
            }
            res.json(resdata)
        })
}

const viewByEmpId = (req, res) => {
    let emp_id = req.params.emp_id;
    Attendance.findAll({ where: { emp_id: emp_id } })
        .then((attendance) => {
            Permission.findAll({ where: { emp_id: emp_id } })
                .then((permission) => {
                    Task.findAll({ where: { emp_id: emp_id } })
                        .then((task) => {
                            Timesheet.findAll({ where: { emp_id: emp_id } })
                                .then((timesheet) => {
                                    const resdata = {
                                        "erp": {
                                            "employeelist": {
                                                [emp_id]: {
                                                    "attendance": attendance,
                                                    "task": task,
                                                    "requesthistory": permission,
                                                    "timesheet": timesheet
                                                }
                                            }
                                        }
                                    }
                                    res.send(resdata)
                                })
                        })
                })
        })
}

const viewDetails = (req, res) => {
    Employee.findAll()
        .then((emp) => {
            var data = []
            for (var i = 0; i < emp.length; i++) {
                // emp_id.push(emp[i].emp_id) 
                let emp_id = emp[i].emp_id
                console.log(emp_id)
                Attendance.findAll({ where: { emp_id: emp_id } })
                    .then((attendance) => {
                        Permission.findAll({ where: { emp_id: emp_id } })
                            .then((permission) => {
                                Task.findAll({ where: { emp_id: emp_id } })
                                    .then((task) => {
                                        Timesheet.findAll({ where: { emp_id: emp_id } })
                                            .then((timesheet) => {
                                                const resdata = {
                                                    [emp_id]: {
                                                        "attendance": attendance,
                                                        "task": task,
                                                        "requesthistory": permission,
                                                        "timesheet": timesheet
                                                    }
                                                }
                                                data.push(resdata)
                                            })
                                    })
                            })
                    })
            }
            setTimeout(() => {
                const resdata = {
                    "erp": {
                        "employeelist": data
                    }
                }
                res.send(resdata)
            }, 1000);
        })
}

const viewAttendance = (req, res) => {
    let emp_id = req.params.emp_id;
    let name=req.params.name;
    console.log(name);
    switch(name){
        case "attendance":
            Attendance.findAll({ where: { emp_id: emp_id } })
            .then((attendance) => {
                const resdata = {
                    "erp": {
                        "employeelist": {
                            [emp_id]: {
                                "attendance": attendance,
                            }
                        }
                    }
                }
                res.send(resdata)
            })
            break;
        case "task":
            Task.findAll({ where: { emp_id: emp_id } })
            .then((task) => {
                const resdata = {
                    "erp": {
                        "employeelist": {
                            [emp_id]: {
                                "task": task,
                            }
                        }
                    }
                }
                res.send(resdata)
            })
            break;
        case "permission":
            Permission.findAll({ where: { emp_id: emp_id } })
            .then((permission) => {
                const resdata = {
                    "erp": {
                        "employeelist": {
                            [emp_id]: {
                                "permission": permission,
                            }
                        }
                    }
                }
                res.send(resdata)
            })
            break;
        case "timesheet":
                Timesheet.findAll({ where: { emp_id: emp_id } })
                .then((timesheet) => {
                    const resdata = {
                        "erp": {
                            "employeelist": {
                                [emp_id]: {
                                    "timesheet": timesheet,
                                }
                            }
                        }
                    }
                    res.send(resdata)
                })
                break;
        default:
            res.send("please try valid....")
    }
   
}


module.exports = {
    viewTask,
    create,
    viewByEmpId,
    viewDetails,
    viewAttendance
}