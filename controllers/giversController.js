const express = require("express");
const router = express.Router();

const Giver = require('../models').Giver;
const User = require('../models').User;


//Index Route
router.get('/', (req, res) => {
    Giver.findAll( {
        include: [{ model: User }],
        order: [
            ['givername', 'ASC'],
        ],
    }).then((foundGiver) => {
        console.log(foundGiver);
        User.findAll( {
            order: [
                ['id', 'ASC'],
            ],
        }).then((allUsers) => {
            console.log(allUsers);
            res.render('givers/index.ejs', {
            giver: foundGiver,
            users: allUsers,
            });
        
        });
    });
});

//New Giver Routes
router.get('/new', (req, res) => {
    res.render('givers/newgiver.ejs');
});

router.post('/', (req, res) => {
    Giver.create(req.body).then(() => {
        res.redirect('/givers');
    });
});

//Unassigned Route
router.get('/unassigned', (req, res) => {
    Giver.findAll( {
        where: { userId: null },
    }).then((unassignedGiver) => {
        res.render('givers/unassigned.ejs', {
            giver: unassignedGiver,
        });
    });
});

//Show/Edit Giver Routes
router.get('/:id', (req, res) => {
    Giver.findByPk(req.params.id, {
        include: [{ model: User }],
    }).then((foundGiver) => {
        console.log(foundGiver)
        User.findAll().then((allUsers) => {
            res.render('givers/profile.ejs', {
            giver: foundGiver,
            users: allUsers,
            }); 
        });
    });
});

router.put('/:id', (req, res) => {
    Giver.update(req.body, {
        where: {id: req.params.id},
        returning: true,
    }).then((giver) => {
        res.redirect(`/givers/`);
    });
});

//Delete Route
router.delete('/:id', (req, res) => {
    Giver.destroy({
        where: {id: req.params.id},
        returning: true,
    }).then(() => {
        res.redirect('/givers/');
    });
});







module.exports = router;