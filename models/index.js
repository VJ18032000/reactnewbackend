const dbConfig=require("../config/dbConfig.js")
const {Sequelize,Datatypes}=require("sequelize");

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,

        pool:{
            max:dbConfig.max,
            min:dbConfig.min,
            acquire:dbConfig.acquire,
            idle:dbConfig.idle
        }
    }
)
sequelize.authenticate()
.then(()=>{
    console.log("connected...")
})
.catch(err=>{
    console.log("error",err)
})

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.register=require("./loginModel")(sequelize,Datatypes)
db.permission=require("./permission")(sequelize,Datatypes)
db.leave=require("./leave_letter")(sequelize,Datatypes)
db.task=require("./task")(sequelize,Datatypes)
db.attendance=require("./attendance")(sequelize,Datatypes)
db.timesheet=require("./timesheet")(sequelize,Datatypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log("yes re-sync done")
})

module.exports=db