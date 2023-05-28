const Sequelize=require('sequelize')
module.exports=(sequelize,DataTypes)=>{

    const Task=sequelize.define("task",{
        emp_id:{
            type:Sequelize.STRING,
        },
        task:{
            type:Sequelize.STRING,
        }, 
        date:{
            type:Sequelize.STRING
        }
    })
    return Task
}