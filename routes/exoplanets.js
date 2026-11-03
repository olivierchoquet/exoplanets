const express = require('express');
const router = express.Router();

const exoplanetsTable = [
    { id: 1, uniqueName: "TRAPPIST-1-d", hClass: "Mésoplanète", discoveryYear: 2016, IST: 0.9, pClass: "Sous-terrienne chaude" },
    { id: 2, uniqueName: "KOI-1686.01", hClass: "Mésoplanète", discoveryYear: 2011, IST: 0.89, pClass: "Super-terrienne chaude" },
    { id: 3, uniqueName: "LHS 1723 b", hClass: "Mésoplanète", discoveryYear: 2017, IST: 0.89, pClass: "Super-terrienne chaude" },
];

/* GET exoplanets index. */
router.get('/', function (req, res, next) {
    res.render('exoplanets/index.hbs', { exoplanetsTable });
});


/* POST add exoplanet. */
router.post('/add', function (req, res, next) {
    console.log("POST ADD EXOPLANET");
    const id = exoplanetsTable.length + 1;
    exoplanetsTable.push({
        id: id,
        uniqueName: req.body.uniqueNameExoplanet,
        hClass: req.body.hClassExoplanet,
        discoveryYear: req.body.discoveryYearExoplanet
    });
    res.redirect('/exoplanets');
});


/* GET search exoplanet. */
router.get('/search', function (req, res, next) {
    console.log("GET SEARCH EXOPLANET");
    const uniqueNameExoplanetParam = req.query.uniqueNameExoplanet;
    let min3charOK = false;
    let exoplanetFound = null;
    if (uniqueNameExoplanetParam.length >= 3) {
        min3charOK = true;
        for (let exoplanet of exoplanetsTable) {
            if (exoplanet.uniqueName.toUpperCase().startsWith(uniqueNameExoplanetParam.toUpperCase())) {
                console.log("trouvé");
                exoplanetFound = exoplanet;
                // stop the loop !
                break;
            }
        }
    }
    res.render('exoplanets/index.hbs', { exoplanetsTable, min3charOK, exoplanet: exoplanetFound });
});


/* GET details exoplanet. */
router.get('/details', function (req, res, next) {
    console.log("GET DETAILS EXOPLANET");
    // convert string req.query.id to int
    // another solution is to use == instead of === in if instruction
    const exoplanetIdParam = parseInt(req.query.id);
    let exoplanetFound = null;
    for (let exoplanet of exoplanetsTable) {
        if (exoplanet.id === exoplanetIdParam) {
            exoplanetFound = exoplanet;
            console.log("trouvé : " + exoplanet.id);
            break;
        }
    }
    res.render('exoplanets/details.hbs', { exoplanet: exoplanetFound });

});


module.exports = router;