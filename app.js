const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users_route");

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", userRouter);





//home route
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

//route not found error
app.use((req,res, next)=>{
    res.status(404).json({
        message:"route not found"
    })
})

//server not found
app.use((err,req,res, next)=>{
    res.status(500).json({
        message:"something broken"
    })
})

module.exports = app;