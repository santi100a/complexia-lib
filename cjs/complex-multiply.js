"use strict";
var _1 = require(".");
module.exports = function complexMultiply(z1, z2) {
    // > (a + bi) * (c + di)
    // = (a + bi) * c + (a + bi) * di
    // = (ac + bci) + (adi + bidi)
    // = ac + bci + adi - bd
    // = (ac - bd) + (ad + bc)i
    return new _1.ComplexNumber(z1.real * z2.real - z1.imaginary * z2.imaginary, z1.real * z2.imaginary + z1.imaginary * z2.real);
};
