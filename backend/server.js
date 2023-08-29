// const express = require('express');

// require('dotenv').config();

// const app = express();

// const cors = require("cors");
// app.use(cors());
// app.use(express.json())
// const {mongoose} = require('mongoose');


// //data base

// app.listen(3001, function(){
//     console.log("express server is running on port 3001")

// })

// mongoose.connect("mongodb+srv://SaniKnows:Annknight12@cluster0.wiligqi.mongodb.net/userInfo?retryWrites=true&w=majority")

// .then(() => console.log('DB connected'))
// .catch((err) => console.log("DB not"))




const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');

app.use(express.json());
app.use(cors());
// mongoose.connect("mongodb+srv://SaniKnows:Annknight12@cluster0.wiligqi.mongodb.net/userInfo?retryWrites=true&w=majority");


mongoose.connect("mongodb+srv://SaniKnows:Annknight12@cluster0.wiligqi.mongodb.net/userInfo?retryWrites=true&w=majority")

.then(() => console.log('DB connected'))
.catch((err) => console.log("DB not"))


app.get("/getUsers",(req,res) => {
    // UserModel.find({}, (err,result)=> {
    //     if (err){
    //         res.json(err)

    //     }else{
    //         res.json(result)
    //     }
    // });
   UserModel.find({}).then((err,result) =>{
        if (err){
                    console.log(res.json(err))
        
                }else{
                    console.log(res.json(result))
                }
        // console.log(UserModel.find({name:'Dwayne'}))

    });
});



app.post("/createUser",async (req,res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
});


// app.post("/createUser",async (req,res) =>{
//     const user2 = req.body;
//     const newUser2 = new UserModel2(user2);
//     await newUser2.save();

//     res.json(user2)
// });

app.listen(3001,() =>{
    console.log("Server runs - litty")
})