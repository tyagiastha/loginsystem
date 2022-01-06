const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn")
const User = require("./models/user");
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Hello from user registration and login system`);
})

app.post("/register", async (req, res) => {
    try {
        const { firstname, lastname } = req.body;
        const newUser = new User({
            firstname: firstname,
            lastname: lastname
        })
        await newUser.save();
        res.status(201).send(`New user added`);
    }
    catch (err) {
        res.status(400).send(`${err}`);
        console.log(`${err}`);
    }
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})
