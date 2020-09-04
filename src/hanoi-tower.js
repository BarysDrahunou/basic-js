const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, seconds) {
    let turns = 2 ** disksNumber - 1;
    return {
        turns: turns,
        seconds: Math.floor(3600 * turns / seconds),
    }
}