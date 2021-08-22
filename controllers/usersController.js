const express = require("express");
const router = express.Router();

const User = require('../models').User;
const Giver = require('../models').Giver;


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
        res.redirect(`/users/tasks/${loggedUsers[0].id}`);
    }));
});

//Tasks Route
router.get('/tasks/:id', (req, res) => {
    console.log(User);
    User.findByPk(req.params.id).then((user) => {
        res.render('users/tasks.ejs', {
            user: user,
        });
    });
});

//Profile Routes
router.get('/profile/:id', (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        res.render('users/profile.ejs', {
            user: user,
        });
    });
});

router.put('/profile/:id', (req, res) => {
    User.update(req.body, {
        where: {id: req.params.id},
        returning: true,
    }).then((user) => {
        res.redirect(`/users/profile/${req.params.id}`);
    });
});

//Delete Route
router.delete('/profile/:id', (req, res) => {
    User.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.redirect('/users/');
    });
});





module.exports = router;