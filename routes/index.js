const express = require('express');
const router = express.Router();

//get wine model
const Wine = require('../models/Wine');

router.get('/', (req, res) => {
    Wine.find((err, wines) => {
        if(err) {
            throw console.log(err);
        } else {
            res.render('home', {
                wines: wines
            })
        }
    });
});

module.exports = router;