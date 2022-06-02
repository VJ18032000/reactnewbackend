const express=require('express')
const cors=require('cors')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const path=require('path')

var corOptions={
    origin:'http://localhost:3000'
}

const router=require("./routes/registerRouter.js")
app.use("/register",router)
app.use('*/static',express.static('image/uploads'));
app.use(cors(corOptions))
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.json({message:"hello I am VIJAYA KUMAR"})
})
const PORT=process.env.PORT||4000;

app.listen(PORT,()=>{
    console.log(`server running port ${PORT}`)
})