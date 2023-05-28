const express=require('express')
const cors=require('cors')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var corOptions={
    origin:'http://localhost:3000'
}

const login=require("./routes/loginRouter.js")
app.use("/",login)
const permission=require("./routes/permission")
app.use("/",permission)
const leave=require("./routes/leave_letter")
app.use("/",leave)
const task=require("./routes/task")
app.use("/",task)
const attendance=require("./routes/attendance")
app.use("/",attendance)
const timesheet=require("./routes/timesheet")
app.use("/",timesheet)

app.use('*/static',express.static('image/uploads'));
app.use(cors(corOptions))


app.get('/',(req,res)=>{
    res.json({message:"hello I am VIJAYA KUMAR"})
})
const PORT=process.env.PORT||9999;

app.listen(PORT,()=>{
    console.log(`server running port ${PORT}`)
})