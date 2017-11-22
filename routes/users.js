var express = require('express');
var router = express.Router();
var userFactory = require("../auth/user-factory");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
router.get("/login", function (req, res, next) {
    if (req.session.user) {
        res.redirect("/");
    } else {
        res.render("user/login");
    }
});

router.post("/login", function (req, res, next) {
    var body = req.body;
    var param = {
        email: body.email,
        password: body.password
    };
    userFactory.getUser(param, function (err, user) {
        if (err) {
            res.sendStatus(500);
        } else {
            if (user) {
                req.session.user = user;
                res.sendStatus(200);
            } else {
                res.sendStatus(403);
            }
        }
    })
});


router.get("/create", function (req, res, next) {
	res.render("user/create")
});

router.post("/create", function (req, res, next) {
    var body = req.body;
    var user = {
        email: body.email,
        password: body.password,
        role: "user-0"
    };
    userFactory.createUser(user, function () {
        req.session.user = user;
        res.send(200);
    });
});

module.exports = router;
