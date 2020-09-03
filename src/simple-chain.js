const CustomError = require("../extensions/custom-error");

const chainMaker = {
    length: [],
    getLength() {
        return chainMaker.length.length;
    },
    addLink(value) {
        if (value === undefined) {
            chainMaker.length.push("( )")
        } else {
            chainMaker.length.push(`( ${value} )`)
        }
        return chainMaker;
    },
    removeLink(position) {
        if (typeof position !== "number") {
            chainMaker.length = [];
            throw Error();
        }
        if (position > chainMaker.length.length || position < 1 || Math.round(position) !== position) {
            chainMaker.length = [];
            throw Error();
        }
        chainMaker.length.splice(position - 1, 1);
        return chainMaker;
    },
    reverseChain() {
        chainMaker.length.reverse();
        return chainMaker;
    },
    finishChain() {
        let a = chainMaker.length.join("~~");
        chainMaker.length = [];
        return a;
    }
};

module.exports = chainMaker;
