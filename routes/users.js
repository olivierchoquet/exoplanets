const express = require('express');
const router = express.Router();



// déclenchement du middleware uniquement pour /users et la suite 
router.use((req, res, next) => {
  console.log('Exo ExoPlanet Users ...')
  next();
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});



module.exports = router;
