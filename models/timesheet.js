const Sequelize=require('sequelize')
module.exports=(sequelize,DataTypes)=>{

    const Timesheet=sequelize.define("timesheet",{
        emp_id:{
            type:Sequelize.STRING,
        },
        start:{
            type:Sequelize.STRING,
        }, 
        date:{
            type:Sequelize.STRING
        }, 
        to:{
            type:Sequelize.STRING
        },
        what_has_done:{
            type:Sequelize.STRING
        },
        project_name:{
            type:Sequelize.STRING
        },
        break:{
            type:Sequelize.STRING
        }
    })
    return Timesheet
}