var benchmark = require('./benchmark');

var User = function (id) {
    this._id = id;
    this._follows = [];
};

User.prototype.follow = function (user) {
    if (!this.isFollowing(user) && this._id !== user._id)
        this._follows.push(user._id);
};

User.prototype.isFollowing = function (user) {
    benchmark.ping();
    return this._follows.indexOf(user._id) !== -1;
};

module.exports = User;

