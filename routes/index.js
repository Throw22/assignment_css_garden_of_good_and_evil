var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var goodOrEvil = req.cookies.goodOrEvil;
  var favoriteFood = req.cookies.favoriteFood;
  var favoriteColor = req.cookies.favoriteColor;
  var insanityLevel = parseInt(req.cookies.insanityLevel);

  res.render('index', {
    title: 'Express',
    goodOrEvil: goodOrEvil,
    favoriteFood: favoriteFood,
    favoriteColor: favoriteColor,
    insanityLevel: insanityLevel
  });
});

router.post('/update', function(req, res, next) {
  var goodOrEvil = req.body.goodOrEvil;
  var favoriteFood = req.body.favoriteFood;
  var favoriteColor = req.body.favoriteColor;
  var insanityLevel = parseInt(req.body.insanityLevel);

  if (!goodOrEvil) goodOrEvil = 'good';
  if (!favoriteFood) favoriteFood = 'Something delicious';
  if (!favoriteColor) favoriteColor = 'Red';
  if (!insanityLevel) insanityLevel = 0;

  res.cookie('goodOrEvil', goodOrEvil);
  res.cookie('favoriteFood', favoriteFood);
  res.cookie('favoriteColor', favoriteColor);
  res.cookie('insanityLevel', insanityLevel);
  res.redirect('back');
});

module.exports = router;

// app.get("/", (req, res) => {
// const favorites = req.cookies.favorites;
// res.render("home", { favorites });
// });

// app.post("/favorite/:id", (req, res) => {
//   const id = req.params.id;
//   const favorites = req.cookies.favorites || [];
//   res.cookie("favorites", favorites.push(id));
//   res.redirect("/");
// });
