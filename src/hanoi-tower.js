const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(discNumber,seconds) {
  function calculate(discNumber){
    if (discNumber===1) return 1;
    return calculate(discNumber-1)*2+1;
  }
  let result={};
  result.turns=calculate(discNumber);
  result.seconds=Math.floor(result.turns*3600/seconds);
  return result;
};
