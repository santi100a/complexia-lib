import { ComplexNumber } from '.';

export = function complexDivide(z1: ComplexNumber, z2: ComplexNumber) {
	// > (a + bi) / (c + di)
	// = (a + bi) / (c + di) * (c - di) / (c - di)
	// = (a + bi)(c + di) / (c^2 + d^2)
	// = ((ac - bd) + (ad + bc)i) / (c^2 + d^2)
	// = (ac + bd) / (c^2 + d^2) + ((bc - ad) / (c^2 + d^2)) i

	if (z2.modulus() == 0) return new ComplexNumber(NaN, NaN);

	return new ComplexNumber(
		(z1.real * z2.real + z1.imaginary * z2.imaginary) / (Math.pow(z2.real, 2) + Math.pow(z2.imaginary, 2)),
		(z1.imaginary * z2.real - z1.real * z2.imaginary) / (Math.pow(z2.real, 2) + Math.pow(z2.imaginary, 2))
	);
};
