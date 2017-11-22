var AWS = require("aws-sdk");
var bcrypt = require('bcrypt');
var _ = require("lodash");
var saltRounds = 10;

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var tableName = "user-dev";

function createUser(user, callback) {
    var email = user.email;
    var password = user.password;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            callback(err);
        } else {
            user.password = hash;
            var params = {
                TableName: tableName,
                Item: user
            };
            docClient.put(params, function(err) {
                if (err) {
                    callback(err);
                } else {
                    callback();
                }
            });
        }
    });
}

function getUser(user, callback) {
    var params = {
        TableName: tableName,
        Key: {
            'email': user.email
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            callback(err);
        } else {
            if (_.isEmpty(data)) {
                callback();
            } else {
                var savedUser = data.Item;
                bcrypt.compare(user.password, savedUser.password, function (err, res) {
                    if (err) {
                        callback(err);
                    } else {
                        res ? callback(undefined, savedUser) : callback();
                    }
                });
            }
        }
    })
}

module.exports.createUser = createUser;
module.exports.getUser = getUser;
