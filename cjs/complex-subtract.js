"use strict";
var _1 = require(".");
module.exports = function complexSubtract(z1, z2) {
    // > (a + bi) - (c + di)
    // = (a + bi) + (-c - di)
    // = a - c + bi - di
    // = (a - c) + (b - d)i 
    return new _1.ComplexNumber(z1.real - z2.real, z1.imaginary - z2.imaginary);
};
