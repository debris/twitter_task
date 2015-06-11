function f(users) {
    for (var i = 0; i < users.length - 1; ++i)
        users[i+1] = users[users[i].isFollowing(users[i+1]) ? i + 1 : i];
    return users[users.length - 1];
}

module.exports = f;

