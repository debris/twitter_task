var counter = 0;

var start = function () {
    counter = 0;
};

var result = function () {
    return counter;
};

var ping = function () {
    counter++;
}; 

module.exports = {
    start: start,
    ping: ping,
    result: result
};

