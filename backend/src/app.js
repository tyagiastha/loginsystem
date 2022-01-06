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
        var { password, confirm_password } = req.body;
        if (password === confirm_password) {
            const { firstname, lastname, email, phone, username } = req.body;
            const newUser = new User({
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                username: username,
                password: password,
                confirm_password: confirm_password
            })
            await newUser.save();
            res.status(201).send(`New user added`);
        }
        else {
            console.log(`Passwords do not match`);
            res.status(401).send(`Passwords do not match`);
        }
    }
    catch (err) {
        res.status(400).send(`${err}`);
        console.log(`${err}`);
    }
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})
