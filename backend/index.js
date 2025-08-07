const express = require("express");
const cors = require("cors");
const { userModel } = require("./models/db");
const app = express();


app.use(express.json());
app.use(cors())



app.post("/signup" , async(req, res)=>{
     await userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.get("/home", (req, res)=>{
    res.send("Success")
})

app.post("/login" , (req, res)=>{
    const {email , password} = req.body;
    userModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("passowrd is wrong")
            }
        }else {
            res.json("user not signup")
        }
    })
})

app.listen("8000" , ()=>{
    console.log("server is runing port 8000 ")
})  