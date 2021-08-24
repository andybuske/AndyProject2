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
        console.log(newUser.id)
        res.redirect(`/users/${newUser.id}/tasks`);
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
        res.redirect(`/users/${loggedUsers[0].id}/tasks`);
    }));
});

//Tasks Route
router.get('/:id/tasks', (req, res) => {
    console.log(User);
    User.findByPk(req.params.id).then((user) => {
        res.render('users/tasks.ejs', {
            user: user,
        });
    });
});

//List Route
router.get('/:id/list', (req, res) => {
    // console.log(user);
    User.findByPk(req.params.id, {
        include: [{ model: Giver }],
    }).then((foundUser) => {
        console.log(foundUser);
        res.render('users/list.ejs', {
            user: foundUser,
        });
    });
});

//Profile Routes
router.get('/:id/profile', (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        res.render('users/profile.ejs', {
            user: user,
        });
    });
});

router.put('/:id/profile', (req, res) => {
    User.update(req.body, {
        where: {id: req.params.id},
        returning: true,
    }).then((user) => {
        res.redirect(`/users/${req.params.id}/profile`);
    });
});

//Delete Route
router.delete('/:id/profile', (req, res) => {
    User.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.redirect('/users/');
    });
});





module.exports = router;