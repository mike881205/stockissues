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

router.get("/api/authorized", isAuthenticated, function (req, res) {
  res.json(req.user);
});

router.post("/api/inputquestion", isAuthenticated, function (req, res) {
  db.Question.create({
    section: req.body.section,
    question: req.body.question
  }).then(function () {
    res.json("question added");
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });
})

// router.post("/api/addClient", isAuthenticated, function (req, res) {
//   db.Client.create({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     phone: req.body.phone,
//     streetAddress: req.body.streetAddress,
//     aptUnitNum: req.body.aptUnitNum,
//     city: req.body.city,
//     state: req.body.state,
//     zip: req.body.zip,
//     audit: req.body.audit,
//     dwelling: req.body.dwelling,
//     gateCode: req.body.gateCode
//   }).then(client => res.json(client)
//   ).catch(function (err) {
//     console.log(err);
//     res.json(err);
//   });
// })

router.post("/api/addClient", function (req, res) {
  db.Client.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    streetAddress: req.body.streetAddress,
    aptUnitNum: req.body.aptUnitNum,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    audit: req.body.audit,
    dwelling: req.body.dwelling,
    gateCode: req.body.gateCode
  }).then(client => res.json(client)
  ).catch(function (err) {
    console.log(err);
    res.json(err);
  });
})

router.post("/api/addMember", function (req, res) {
  db.HouseMember.create({
    name: req.body.name,
    relationship: req.body.relationship,
    age: req.body.age,
    ClientId: req.body.ClientId
  }).then(member => res.json(member)
  ).catch(function (err) {
    console.log(err);
    res.json(err);
  });
})

router.get("/api/getSections", isAuthenticated, function (req, res) {
  db.Section.findAll({ include: [db.Question] })
    .then(dbSections => res.json(dbSections))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/getClients", isAuthenticated, function (req, res) {
  db.Client.findAll({order: [["createdAt", "DESC"]]})
    .then(dbClients => res.json(dbClients))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
})

router.post("/api/submitAssessment", isAuthenticated, function (req, res) {
  db.Response.create({
    ClientId: req.body.ClientId,
    SectionId: req.body.SectionId,
    QuestionId: req.body.QuestionId,
    response: req.body.response,
    observation: req.body.observation,
    comment: req.body.comment
  }).then(dbResults => res.json(dbResults))
    .catch(function (err) {
      console.log(err);
      res.json(err);
    });
})

router.get("/api/getClientResults/:id", isAuthenticated, function (req, res) {
  db.Response.findAll({
    include:[
      {
        model: db.Section,
        include: [db.Question]
      }
    ],
    where: {
      ClientId: req.params.id
    },
    order: [["SectionId", "ASC"]]
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
})

router.get("/api/getResultSections/:id", isAuthenticated, function (req, res) {
  db.Section.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
})

module.exports = router;
