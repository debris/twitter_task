var User = require('./user');

var random = function (n) {
    return Math.random() * n | 0;
}

var generate = function (n) {
    var users = [];
    if (n === 0)
        return users;

    var x = n;
    while (x-- > 0) {
        users.push(new User(x));
    };

    for (var k = 0; k < n * 3; k++) {
        var i = random(users.length);
        var j = random(users.length);

        if (i === j)
            continue;

        users[i].follow(users[j]);
    }

    // randomly create a guy who follows everyone
    var i = random(users.length);
    var user = users[i];
    for (var j = 0; j < users.length; j++) {
        user.follow(users[j]); 
    }

    return users;
};

var fromList = function (arr) {
    return arr.map(function (element) {
        var user = new User(element._id);
        element._follows.forEach(function (id) {
            user.follow({_id: id});
        });
        return user;
    });
};

module.exports = {
    random: generate,
    fromList: fromList 
};

