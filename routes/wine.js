const express = require('express');
const router = express.Router();

//require wine model
const Wine = require('../models/Wine');


//add wine get page
router.get('/add-wine', (req, res) => {
    res.render('wine/add-wine');
});

//post wine
router.post('/add-wine', (req, res) => {
    let title = req.body.title;
    let country = req.body.country;
    let region = req.body.region;
    let lage = req.body.lage;
    let sweetness = req.body.sweetness;
    let sugarLevel = parseInt(req.body.sugarLevel);
    let wineType = req.body.wineType;
    let wineColor = req.body.wineColor;
    let desc = req.body.desc;
    let alcoholLevel = parseInt( req.body.alcoholLevel);
    let vintage = req.body.vintage;
    let validEAN = req.body.validEAN;
    let acidity = parseInt(req.body.acidity);
    let winery = req.body.winery;
    let grape = req.body.grape;
    let appellation = req.body.appellation;



    console.log(validEAN);

    let wine = new Wine({
        title: title,
        country: country,
        region: region,
        lage: lage,
        sweetness: sweetness,
        sugarLevel: sugarLevel,
        wineType: wineType,
        wineColor: wineColor,
        description: desc,
        alcoholLevel: alcoholLevel,
        vintage: vintage,
        validEAN: validEAN,
        acidity: acidity,
        winery: winery,
        grape: grape,
        appellation: appellation
    });

    wine.save((err) => {
        if(err) {
            throw console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

//edit wine
router.get('/edit-wine/:id', (req, res) => {
    let id = req.params.id;
    Wine.find({_id: id}, (err, wine) => {
        if(err) {
            console.log(err);
        } else {
            res.render('wine/edit-wine', {
                wine: wine
            });
        }
    });
});

//edit wine post 
router.post('/edit-wine', (req, res) => {
    let title = req.body.title;
    let country = req.body.country;
    let region = req.body.region;
    let lage = req.body.lage;
    let sweetness = req.body.sweetness;
    let sugarLevel = parseInt(req.body.sugarLevel);
    let wineType = req.body.wineType;
    let wineColor = req.body.wineColor;
    let desc = req.body.desc;
    let alcoholLevel = parseInt( req.body.alcoholLevel);
    let vintage = req.body.vintage;
    let validEAN = req.body.validEAN;
    let acidity = parseInt(req.body.acidity);
    let winery = req.body.winery;
    let grape = req.body.grape;
    let appellation = req.body.appellation;
    let wineId = req.body.wineId;

    Wine.findByIdAndUpdate(wineId, {
        title: title,
        country: country,
        region: region,
        lage: lage,
        sweetness: sweetness,
        sugarLevel: sugarLevel,
        wineType: wineType,
        wineColor: wineColor,
        description: desc,
        alcoholLevel: alcoholLevel,
        vintage: vintage,
        validEAN: validEAN,
        acidity: acidity,
        winery: winery,
        grape: grape,
        appellation: appellation
    }, (err) => {
        if(err) {
            throw console.log(err);
        } else {
            res.redirect('/');
        }
    })
});

//delete wibe

router.get('/delete-wine/:id', (req, res) => {
    let id = req.params.id

    Wine.findByIdAndDelete(id, (err) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect("/");
        }
    })
});



module.exports = router;