const Sequelize=require('sequelize')
module.exports=(sequelize,DataTypes)=>{

    const Permission=sequelize.define("permission",{
        emp_id:{
            type:Sequelize.STRING,
        },
        leave_type:{
            type:Sequelize.STRING,
        }, 
        date:{
            type:Sequelize.STRING
        }, 
        start_time:{
            type:Sequelize.STRING
        },  
        end_time:{
            type:Sequelize.STRING,
        },
        reason:{
            type:Sequelize.STRING
        }
    })
    return Permission
}