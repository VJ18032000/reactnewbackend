const Sequelize=require('sequelize')
module.exports=(sequelize,DataTypes)=>{

    const Register=sequelize.define("employee_data",{
        emp_id:{
            type:Sequelize.TEXT,
        },
        emp_name:{
            type:Sequelize.TEXT
        },
        gender:{
            type:Sequelize.STRING,
            
        }, 
        contact:{
            type:Sequelize.STRING
        },  
        email:{
            type:Sequelize.STRING,
            primaryKey:true
        },
        address:{
            type:Sequelize.STRING
        },  
        profile_pic:{
            type:Sequelize.STRING
        }, 
        dob:{
            type:Sequelize.STRING
        }, 
        material_status:{
            type:Sequelize.STRING
        }, 
        role:{
            type:Sequelize.STRING
        }, 
        doj:{
            type:Sequelize.STRING
        }, 
        password:{
            type:Sequelize.STRING
        },
    })
    return Register
}