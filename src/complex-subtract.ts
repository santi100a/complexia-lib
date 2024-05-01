import { ComplexNumber } from '.';

export = function complexSubtract(z1: ComplexNumber, z2: ComplexNumber) {
    // > (a + bi) - (c + di)
    // = (a + bi) + (-c - di)
    // = a - c + bi - di
    // = (a - c) + (b - d)i 
    return new ComplexNumber(z1.real - z2.real, z1.imaginary - z2.imaginary);
}
