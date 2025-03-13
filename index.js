const express = require ("express");
const app = express();
const port =3000;
 
app.use(express.json());

const tasks=[];


app.get("/tasks",(req,res)=>{
   res.send (tasks)
   
})

 

app.get("/tasks:id",(req,res)=>{
    let {id}=req.params
    tasks=tasks.filter((task)=>task.id=!id)
    res.status(200).send(tasks)
   
 })
 
 app.post("/tasks",(req,res)=>{
    let {
        title,
        description,
        completed
    }=req.body
 console.log(req.body)
  tasks.push({
    id:tasks.length+1,
     title,
     description,
     completed
 })
 
  res.status(201).json ({
    message:"Data recived seccesData received successfully",
    data:{
        title,
        description,
        completed
    }
  })
})
 

app.listen (3000,()=>{
    console.log("server is runnig on port 3000 ");

})