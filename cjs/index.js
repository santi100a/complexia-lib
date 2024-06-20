"use strict";
exports.__esModule = true;
exports.COMPLEX_ORIGIN = exports.complexDivide = exports.complexMultiply = exports.complexSubtract = exports.complexAdd = exports.ComplexNumber = void 0;
var complexAdd = require("./complex-add");
exports.complexAdd = complexAdd;
var complexSubtract = require("./complex-subtract");
exports.complexSubtract = complexSubtract;
var complexMultiply = require("./complex-multiply");
exports.complexMultiply = complexMultiply;
var complexDivide = require("./complex-divide");
exports.complexDivide = complexDivide;
var assertion_lib_1 = require("@santi100a/assertion-lib");
/**
 * Represents a complex number with a real and imaginary part.
 */
var ComplexNumber = /** @class */ (function () {
    /**
     * Represents a complex number with real and imaginary parts.
     *
     * @param real - The real part of the complex number.
     * @param imaginary - The imaginary part of the complex number.
     */
    function ComplexNumber(real, imaginary) {
        (0, assertion_lib_1.assertTypeOf)(real, 'number', 'real');
        (0, assertion_lib_1.assertTypeOf)(imaginary, 'number', 'imaginary');
        this.real = real;
        this.imaginary = imaginary;
    }
    /**
     * Returns the conjugate of the complex number.
     *
     * @returns - The conjugate of the complex number.
     */
    ComplexNumber.prototype.conjugate = function () {
        return new ComplexNumber(this.real, -this.imaginary);
    };
    /**
     * Returns the modulus (magnitude or distance to the origin) of the complex number.
     *
     * @returns - The modulus of the complex number.
     */
    ComplexNumber.prototype.modulus = function () {
        return Math.pow(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2), 0.5); // sqrt(a^2 + b^2)
    };
    /**
     * Returns the argument (phase or angle with the positive x-axis) of the complex number.
     *
     * @returns The argument of the complex number in radians.
     */
    ComplexNumber.prototype.argument = function () {
        return Math.atan2(this.imaginary, this.real);
    };
    /**
     * Creates a complex number from polar coordinates (modulus and argument).
     *
     * @param modulus - The modulus of the complex number.
     * @param argument - The argument of the complex number.
     * @returns - A new instance of ComplexNumber.
     */
    ComplexNumber.fromPolar = function (modulus, argument) {
        (0, assertion_lib_1.assertTypeOf)(modulus, 'number', 'modulus');
        (0, assertion_lib_1.assertTypeOf)(argument, 'number', 'argument');
        return new ComplexNumber(modulus * Math.cos(argument), modulus * Math.sin(argument));
    };
    return ComplexNumber;
}());
exports.ComplexNumber = ComplexNumber;
exports.COMPLEX_ORIGIN = new ComplexNumber(0, 0);
