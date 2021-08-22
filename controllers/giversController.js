const express = require("express");
const router = express.Router();

const Giver = require('../models').Giver;


//Index Route
router.get('/', (req, res) => {
    Giver.findAll().then((foundGiver) => {
        res.render('givers/index.ejs', {
            giver: foundGiver,
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











module.exports = router;