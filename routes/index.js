const express = require('express');
const router = express.Router();

const messagesTable = [];


/* GET home page. */
router.get('/', (req, res) => {
  console.log("Je passe par la route /");
  const today = new Date();
  /* Attention Date.now() est tentant mais renvoie une valeur numérique et non un objet Date
  donc impossible de faire ceci par exemple
  let now = Date.now(); 
  now.getFullYear()*/
  const todayString = "Nous sommes le " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + ".";
  const hourtodayString = "Il est " + today.getHours() + ":" + today.getMinutes() + " à Bruxelles";
  // today -> name of variable to pass to hbs
  // after : -> concatenation of two string as value of today
  res.render('index.hbs', { today: todayString + " " + hourtodayString });
});

/* GET home page. */
router.get('/exolunes', (req, res) => {
  console.log("Je passe par la route /exolunes");
  // Exolunes list variable
  const exolunesList = ['DH Tauri', 'Kepler-409', 'WASP-49'];
  // pass Exolunes list to view
  res.render('exolunes.hbs', { exolunesList });
});



/* GET forum. */
router.get('/forum', function (req, res, next) {
  res.render('indexForum.hbs', { messagesTable });
});


/* POST add forum. */
router.post('/forum/add', function (req, res, next) {
  console.log("POST ADD FORUM");
  messagesTable.push({ message: req.body.message, author: req.body.author });
  res.redirect('/forum');
});



module.exports = router;
