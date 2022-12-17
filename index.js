const express =require("express");
const app=express();
const port=8080;
// app.use('/api/v1')

app.get("/pages", async(req,res)=>{
    try{
        res.send("<h1>Hi everyone </h1>")
        console.log("Hello Devs");

    }
    catch(error){
      
        console.log("The error that occured is ", error)
    }
})

app.listen(port,()=>{
    console.log("App is running on port ", port);
})
