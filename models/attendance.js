const Sequelize=require('sequelize')
module.exports=(sequelize,DataTypes)=>{

    const Attendance=sequelize.define("attendance",{
        emp_id:{
            type:Sequelize.STRING,
        },
        punch_in:{
            type:Sequelize.STRING,
        }, 
        date:{
            type:Sequelize.STRING
        }, 
        punch_out:{
            type:Sequelize.STRING
        },
        work_hours:{
            type:Sequelize.STRING
        }
    })
    return Attendance
}