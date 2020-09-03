const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {
    if (typeof activity!=='string') return false;
    let numActivity = Number.parseFloat(activity);
    if (numActivity >= 1 && numActivity < 15) {
        return Math.ceil(Math.log(MODERN_ACTIVITY / numActivity) * HALF_LIFE_PERIOD / 0.693);
    }
    return false;
};
