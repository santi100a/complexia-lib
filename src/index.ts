import complexAdd = require('./complex-add');
import complexSubtract = require('./complex-subtract');
import complexMultiply = require('./complex-multiply');
import complexDivide = require('./complex-divide');
import { assertTypeOf } from '@santi100a/assertion-lib';

/**
 * Represents a complex number with a real and imaginary part.
 */
class ComplexNumber {
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
	constructor(real: number, imaginary: number) {
		assertTypeOf(real, 'number', 'real');
		assertTypeOf(imaginary, 'number', 'imaginary');

		this.real = real;
		this.imaginary = imaginary;
	}
	/**
	 * Returns the conjugate of the complex number.
	 *
	 * @returns - The conjugate of the complex number.
	 */
	conjugate(): ComplexNumber {
		return new ComplexNumber(this.real, -this.imaginary);
	}
	/**
	 * Returns the modulus (magnitude or distance to the origin) of the complex number.
	 *
	 * @returns - The modulus of the complex number.
	 */
	modulus() {
		return Math.pow(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2), 0.5); // sqrt(a^2 + b^2)
	}
	/**
	 * Returns the argument (phase or angle with the positive x-axis) of the complex number.
	 *
	 * @returns The argument of the complex number in radians.
	 */
	argument() {
		return Math.atan2(this.imaginary, this.real);
	}
	/**
	 * Creates a complex number from polar coordinates (modulus and argument).
	 *
	 * @param modulus - The modulus of the complex number.
	 * @param argument - The argument of the complex number.
	 * @returns - A new instance of ComplexNumber.
	 */
	static fromPolar(modulus: number, argument: number) {
		assertTypeOf(modulus, 'number', 'modulus');
		assertTypeOf(argument, 'number', 'argument');

		return new ComplexNumber(
			modulus * Math.cos(argument),
			modulus * Math.sin(argument)
		);
	}
}

export { ComplexNumber, complexAdd, complexSubtract, complexMultiply, complexDivide };
export const COMPLEX_ORIGIN = new ComplexNumber(0, 0);
