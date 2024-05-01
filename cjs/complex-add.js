"use strict";
var _1 = require(".");
module.exports = function complexAdd(z1, z2) {
    return new _1.ComplexNumber(z1.real + z2.real, z1.imaginary + z2.imaginary);
};
