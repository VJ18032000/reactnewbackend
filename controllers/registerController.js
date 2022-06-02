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




//create register
const addregisteration=async(req,res)=>{
   
    let info={
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    }
    const register=await Register.findOne({where:{email:req.body.email}})
    console.log(register)
    if(register==null){
        Register.create(info)
        res.status(200)
        res.send(register)
    }else{
    res.send({message:"email already exists"})
    }
}
//get by email
const getregisteremail=async(req,res)=>{
    let email=req.params.email
    let register=await Register.findAll({where:{email:email}})
    res.status(200)
    res.json(register)
}
const updateregisteremail=async(req,res)=>{
    let email=req.params.email
    let register=await Register.update(req.body,{where:{email:email}})
    res.status(200)
    res.send("update successfully")
}
const getlogin=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    let register=await Register.findAll({where:[{email:email, password:password}]})
    console.log(register)
    if(register==0){
        res.send({message:"wrong Username/password combination!"})
    }else{
        res.send(register)
    }

}

const updatepassword=async(req,res)=>{
    let email=req.params.email
    let register=await Register.update(req.body,{where:{email:email}})
    res.status(200).json(register)
}
const imageupload=async(req, res) => {
    try {
        const email=req.params.email;
        let upload = multer({ storage: storage}).single('avatar');
           
        upload(req, res, function(err) {
            if (!req.file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }
            let image= req.file.filename
            console.log(image)
            let register= Register.update({image:image},{where:{email:email}})
            res.status(200).send(register)  

       
        }); 

    }catch (err) {console.log(err)}
}

module.exports={
    addregisteration,
    updateregisteremail,
    updatepassword,
    getregisteremail,
    imageupload,
    getlogin
}