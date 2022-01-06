const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
})
const User = new mongoose.model("user", userSchema);
module.exports = User;