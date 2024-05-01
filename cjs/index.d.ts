import complexAdd = require('./complex-add');
import complexSubtract = require('./complex-subtract');
import complexMultiply = require('./complex-multiply');
import complexDivide = require('./complex-divide');
/**
 * Represents a complex number with a real and imaginary part.
 */
declare class ComplexNumber {
    /**
     * The real part of the complex number.
     */
    readonly real: number;
    /**
     * The imaginary part of the complex number.
     */
    readonly imaginary: number;
    /**
     * Represents a complex number with real and imaginary parts.
     *
     * @param real - The real part of the complex number.
     * @param imaginary - The imaginary part of the complex number.
     */
    constructor(real: number, imaginary: number);
    /**
     * Returns the conjugate of the complex number.
     *
     * @returns - The conjugate of the complex number.
     */
    conjugate(): ComplexNumber;
    /**
     * Returns the modulus (magnitude or distance to the origin) of the complex number.
     *
     * @returns - The modulus of the complex number.
     */
    modulus(): number;
    /**
     * Returns the argument (phase or angle with the positive x-axis) of the complex number.
     *
     * @returns The argument of the complex number in radians.
     */
    argument(): number;
    /**
     * Creates a complex number from polar coordinates (modulus and argument).
     *
     * @param modulus - The modulus of the complex number.
     * @param argument - The argument of the complex number.
     * @returns - A new instance of ComplexNumber.
     */
    static fromPolar(modulus: number, argument: number): ComplexNumber;
}
export { ComplexNumber, complexAdd, complexSubtract, complexMultiply, complexDivide };
export declare const COMPLEX_ORIGIN: ComplexNumber;
