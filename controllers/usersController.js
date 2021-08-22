const express = require("express");
const router = express.Router();

const User = require('../models').User;


//Index Route
router.get('/', (req, res) => {
    res.render('users/index.ejs');
});

//Signup Routes
router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

router.post('/', (req, res) => {
    User.create(req.body).then((newUser) => {
        res.render('users/tasks.ejs');
    });
});

//Login Routes
router.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

router.post('/login', (req, res) => {
    User.findAll({
        where: {username: req.body.username, password: req.body.password}
    }).then((loggedUsers => {
        res.render('users/tasks.ejs', {
            user: loggedUsers,
        });
    }));
});

//Show Route
router.get('/profile/:id', (req, res) => {
    console.log(User);
    User.findByPk(req.params.id).then((user) => {
        res.render('users/profile.ejs', {
            user: user,
        });
    });
});













module.exports = router;