import { ComplexNumber } from '.';

export = function complexAdd(z1: ComplexNumber, z2: ComplexNumber) {
    return new ComplexNumber(z1.real + z2.real, z1.imaginary + z2.imaginary);
}
