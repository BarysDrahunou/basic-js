const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) return "Unable to determine the time of year!";
    if (Object.prototype.toString.call(date) !== '[object Date]') throw Error();
    let a = date.getMonth() + 1;
    if (a >= 3 && a <= 5) return "spring";
    if (a >= 6 && a <= 8) return "summer";
    if (a >= 9 && a <= 11) return "autumn";
    return "winter"
}
