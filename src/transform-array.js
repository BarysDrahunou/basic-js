const CustomError = require("../extensions/custom-error");
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};
module.exports = function transform(array) {
    let ancillaryArray = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"]
    if (!Array.isArray(array)) throw Error;
    let intermediateArray = array.slice();
    for (let i = 0; i < intermediateArray.length; i++) {
        if (intermediateArray[i] === ancillaryArray[0]) {
            if (i < intermediateArray.length - 1) {
                intermediateArray[i + 1] = ancillaryArray[1];
            }
        }
        if (intermediateArray[i] === ancillaryArray[1]) {
            if (i > 0) {
                intermediateArray[i - 1] = ancillaryArray[1];
            }
        }
        if (intermediateArray[i] === ancillaryArray[2]) {
            if (i < intermediateArray.length - 1 && ancillaryArray.indexOf(intermediateArray[i + 1]) === -1) {
                intermediateArray[i] = intermediateArray[i + 1];
            }
        }
        if (intermediateArray[i] === ancillaryArray[3]) {
            if (i > 0 && ancillaryArray.indexOf(intermediateArray[i - 1]) === -1) {
                intermediateArray[i] = intermediateArray[i - 1];
            }
        }
    }
    return intermediateArray.filter(x=>ancillaryArray.indexOf(x) === -1);
};
