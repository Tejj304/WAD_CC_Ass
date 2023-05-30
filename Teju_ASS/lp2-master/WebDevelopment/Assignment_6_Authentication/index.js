const express = require("express")
const cors = require("cors")

const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());

var users = [];

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    
    let flag = false;
    try{
        users.forEach((user)=>{
            if(user.email===email && user.password===password){
                flag = true;
            }
        });
        if(flag){
            res.send("success");
            console.log("User is valid")
        }
        else{
            res.send("Invalid user");
            console.log("User is invalid")
        }
    }
    catch(error){
        res.send("error");
        console.log(error)
    }
});

app.post("/register", (req, res) => {
    const { name, username, email, password } = req.body;
    try{
        users.push({ name, username, email, password });
        console.log(users);
        res.send("success");
    }
    catch(error){
        res.send("error");
    }
});

app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});