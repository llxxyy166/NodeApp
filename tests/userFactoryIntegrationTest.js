/**
 * Created by xinyelei on 11/12/17.
 */
var assert = require('assert');
var userFactory = require("../auth/user-factory");

describe("user-factory", function () {
    it("should add an user", function (done) {
        userFactory.createUser({
            email: "xylei166@gmail.com",
            password: "7885780a",
            alias: "superawsomexinye",
            role: "god"
            }, function (error) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            }
        );
    });

    it("should get an user", function (done) {
        userFactory.getUser({
            email: "xylei166@gmail.com",
            password: "7885780aa"
        }, function (err, data) {
            if (err) {
                done(err);
            } else {
                console.log(data);
                done();
            }
        })
    })
});
