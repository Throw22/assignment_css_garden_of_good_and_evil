var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var goodOrEvil = req.cookies.goodOrEvil;
  var favoriteFood = req.cookies.favoriteFood;
  var favoriteColor = req.cookies.favoriteColor;
  var insanityLevel = parseInt(req.cookies.insanityLevel);

  if (!insanityLevel) insanityLevel = '0';
  console.log(favoriteColor === 'red');
  console.log(favoriteColor === 'yellow');
  console.log(favoriteColor === 'green');
  console.log(favoriteColor === 'blue');
  res.render('index', {
    title: 'Express',
    goodOrEvil: goodOrEvil,
    favoriteFood: favoriteFood,
    favoriteColor: favoriteColor,
    isRed: favoriteColor === 'red',
    isGreen: favoriteColor === 'green',
    isYellow: favoriteColor === 'yellow',
    isBlue: favoriteColor ==='blue',
    insanityLevel: insanityLevel,
    isGood: goodOrEvil === 'good',
    isALittleInsane: insanityLevel <= 223,
    isMediumInsane: insanityLevel >= 224 && insanityLevel <= 446,
    isVeryInsane: insanityLevel >= 447
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
  if (!insanityLevel) insanityLevel = '0';

  res.cookie('goodOrEvil', goodOrEvil);
  res.cookie('favoriteFood', favoriteFood);
  res.cookie('favoriteColor', favoriteColor);
  res.cookie('insanityLevel', insanityLevel);
  res.redirect('back');
});

module.exports = router;
