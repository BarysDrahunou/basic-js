const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(value) {
        let counter = 1;
        if (JSON.stringify(value) === JSON.stringify(value.flat(1))) return counter;
        return counter + this.calculateDepth(value.flat(1));
    }
};
