import { ComplexNumber } from '.';

export = function complexMultiply(z1: ComplexNumber, z2: ComplexNumber) {
	// > (a + bi) * (c + di)
	// = (a + bi) * c + (a + bi) * di
	// = (ac + bci) + (adi + bidi)
	// = ac + bci + adi - bd
	// = (ac - bd) + (ad + bc)i
	return new ComplexNumber(
		z1.real * z2.real - z1.imaginary * z2.imaginary,
		z1.real * z2.imaginary + z1.imaginary * z2.real
	);
};
