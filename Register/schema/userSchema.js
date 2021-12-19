const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    jenis_kelamin: String,
    tanggal_lahir: Date,
    foto: String,
});

module.exports = mongoose.model("user", userSchema);