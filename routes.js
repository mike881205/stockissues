var passport = require("./config/passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");

router.post("/api/register", function (req, res) {
  console.log("registering user");

  //****
  //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
  //****

  db.User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then(function () {
    res.json("user registered");
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });

});

router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

router.get("/api/logout", function (req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/api/user", function (req, res) {
  if (req.query.username) {
    db.User.find({
      where: { username: req.query.username }
    }).then(function (result) {
      res.json(result ? { length: result.length } : { length: 0 });
    }).catch(function (err) {
      res.json(err);
    })
  } else {
    res.json({ message: "no username entered for query" });
  }
});

// router.get("/api/authorized", isAuthenticated, function (req, res) {
//   res.json(req.user);
// });

router.post("/api/addPOInfo", (req, res) => {
  db.POInfo.create({
    POnum: req.body.POnum,
    design: req.body.design,
    issue: req.body.issue,
    notes: req.body.notes
  }).then(POInfo => res.json(POInfo))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
})

router.post("/api/addMissingInfo", (req, res) => {
  db.Missing.create({
    POnum: req.body.POnum,
    design: req.body.design,
    priority: req.body.priority,
    brand: req.body.brand,
    style: req.body.style,
    color: req.body.color,
    xSmall: req.body.xSmall,
    small: req.body.small,
    medium: req.body.medium,
    large: req.body.large,
    xLarge: req.body.xLarge,
    twoXL: req.body.twoXL,
    threeXL: req.body.threeXL,
    fourXL: req.body.fourXL,
    fiveXL: req.body.fiveXL,
    POInfoId: req.body.POInfoId
  }).then(MissingInfo => res.json(MissingInfo))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
})

router.post("/api/addReceivedInfo", (req, res) => {
  db.Received.create({
    POnum: req.body.POnum,
    design: req.body.design,
    brand: req.body.brand,
    style: req.body.style,
    color: req.body.color,
    xSmall: req.body.xSmall,
    small: req.body.small,
    medium: req.body.medium,
    large: req.body.large,
    xLarge: req.body.xLarge,
    twoXL: req.body.twoXL,
    threeXL: req.body.threeXL,
    fourXL: req.body.fourXL,
    fiveXL: req.body.fiveXL,
    POInfoId: req.body.POInfoId
  }).then(ReceivedInfo => res.json(ReceivedInfo))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
})

router.get("/api/getPOinfo", (req, res) => {
  db.POInfo.findAll({
    include: [{ all: true, nested: true }],
    order: [["POnum", "DESC"]]
  })
    .then(dbPOinfo => res.json(dbPOinfo))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/getMissingInfo/", (req, res) => {
  db.Missing.findAll({
    // where: {
    //   POnum: req.params.id
    // },
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
