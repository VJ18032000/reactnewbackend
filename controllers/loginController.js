const db=require('../models')
const multer=require('multer')
const path=require('path')

const Register=db.register

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../image', 'uploads'),
    filename : function (req, file, cb) {   
        cb(null, Date.now() + '-' + file.originalname )  
    }
})

const getlogin=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    let register=await Register.findAll({where:[{email:email, password:password}]})
    console.log(register)
    if(register==0){
        const resdata={
            "status":"ERROR",
            "result":"wrong Username/password combination!"
        }
        res.json(resdata)
    }else{
        const resdata={
            "status":"OK",
            "result":`Login Succssfully ...${register[0].emp_name}`
        }
        res.json(resdata)
    }

}


module.exports={
    getlogin
}