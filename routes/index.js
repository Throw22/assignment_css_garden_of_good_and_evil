var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var goodOrEvil = req.cookies.goodOrEvil;
  if(!goodOrEvil) goodOrEvil = 'good';
  res.render('index', { title: 'Express', 'goodOrEvil': goodOrEvil });
});

router.post('/update', function(req, res, next) {
  var goodOrEvil = req.body.goodOrEvil;
  res.cookie('goodOrEvil', goodOrEvil);
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