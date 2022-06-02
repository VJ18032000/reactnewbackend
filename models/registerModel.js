const Sequelize=require('sequelize')
module.exports=(sequelize,DataTypes)=>{

    const Register=sequelize.define("register",{
        first_name:{
            type:Sequelize.TEXT,
        },
        last_name:{
            type:Sequelize.TEXT
        },
        email:{
            type:Sequelize.STRING,
            primaryKey:true
        }, 
        password:{
            type:Sequelize.STRING
        },  
        contact:{
            type:Sequelize.STRING
        },
        address:{
            type:Sequelize.STRING
        },  
        image:{
            type:Sequelize.STRING
        }, 
    })
    return Register
}