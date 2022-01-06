const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        validate: /^[a-z]+$/,
        required: true
    },
    lastname: {
        type: String,
        validate: /^[a-z]+$/
    },
    email: {
        type: String,
        validate: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        required: true
    },
    phone: {
        type: Number,
        validate: /^([6-9][\d]{9})$/
    },
    username: {
        type: String,
        validate: /^[\w]+$/,
        required: true
    },
    password: {
        type: String,
        required: true
        // , validate: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
})

const User = new mongoose.model("user", userSchema);
module.exports = User;