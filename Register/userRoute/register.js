const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../schema/userSchema");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

router.post("/register", (req, res) => {
    const userModel = new userSchema();
    const encryptedPassword = bcrypt.hashSync(req.body.password, salt);
    userModel.username = req.body.username;
    userModel.password = encryptedPassword;
    userModel.email = req.body.email;
    userModel.jenis_kelamin = req.body.jenis_kelamin;
    userModel.tanggal_lahir = req.body.tanggal_lahir;
    userModel.foto = req.body.foto;


    return userModel.save((err, data) => {
        if (err) {
            res.json({
            msg: "user gagal dimasukan",
        });
        } else {
            res.json({
            msg: "user berhasil dimasukan",
            data,
        });
        }
    });

    res.json({
        msg: "ini dari regsiter",
    });
});

module.exports = router;