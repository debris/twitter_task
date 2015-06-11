var random = function (n) {
    return Math.random() * n | 0;
}

var findSpecialUser = function (users) {

    var usersCopy = users.slice();

    while (usersCopy.length > 1) {
        var i = random(usersCopy.length - 1);
        var j = i + 1; 
        
        var a = usersCopy[i];
        var b = usersCopy[j];

        // remove users not matching condition
        if (a.isFollowing(b))
            usersCopy.splice(j, 1);
        else
            usersCopy.splice(i, 1);
    }

    var user = usersCopy[0];
    var correct = true;

    var otherUsers = users.slice();
    otherUsers.splice(otherUsers.indexOf(user), 1);

    for (var i = 0; i < otherUsers.length && correct; i++) {
        var u = otherUsers[i];
        correct = user.isFollowing(u) && !u.isFollowing(user);
    }

    return correct ? user : null;
}

module.exports = findSpecialUser;
