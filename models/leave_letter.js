const Sequelize=require('sequelize')
module.exports=(sequelize,DataTypes)=>{

    const leave_letter=sequelize.define("leave_letter",{
        emp_id:{
            type:Sequelize.STRING,
        },
        leave_type:{
            type:Sequelize.STRING,
        }, 
        leave_date_from:{
            type:Sequelize.STRING
        }, 
        leave_date_to:{
            type:Sequelize.STRING
        },  
        no_of_days:{
            type:Sequelize.STRING,
        },
        reason:{
            type:Sequelize.STRING
        }
    })
    return leave_letter
}