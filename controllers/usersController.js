const express = require("express");
const router = express.Router();

const User = require('../models').User;


//Index Route
router.get('/', (req, res) => {
    res.render('users/index.ejs');
});




















module.exports = router;