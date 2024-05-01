describe('complex number tests', () => {
	const {
		ComplexNumber,
		complexAdd,
		complexSubtract,
		complexMultiply,
		complexDivide,
        COMPLEX_ORIGIN,
	} = require('..');
	describe('class tests', () => {
        const cmpl = new ComplexNumber(5, 3);
        test('it can compute the complex conjugate correctly', () => {
            const conjugate = cmpl.conjugate();
            expect(conjugate.real).toBeCloseTo(5);
            expect(conjugate.imaginary).toBeCloseTo(-3);
        });
        test('it can compute the modulus of the number correctly', () => {
            const mod = cmpl.modulus();
            expect(mod).toBeCloseTo(Math.sqrt(5**2 + 3**2));
        });
        test('it can compute the argument of the number correctly', () => {
            const arg = cmpl.argument();
            expect(arg).toBeCloseTo(Math.atan(3/5));

            const cmpl2 = new ComplexNumber(-2, -7);
            expect(cmpl2.argument()).toBeCloseTo(Math.atan(7/2) - Math.PI);

            const cmpl3 = new ComplexNumber(-2, 7);
            expect(cmpl3.argument()).toBeCloseTo(Math.atan(-7/2) + Math.PI);

        });
        test('it can compute the argument of a pure positive imaginary number correctly', () => {
            const arg = (new ComplexNumber(0, 1)).argument();
            expect(arg).toBeCloseTo(Math.PI / 2);
        });
        test('it can compute the argument of a pure negative imaginary number correctly', () => {
            const arg = (new ComplexNumber(0, -1)).argument();
            expect(arg).toBeCloseTo(3 * Math.PI / 2);
        });
    });
    describe('operator function cases', () => {
        const z1 = new ComplexNumber(1, 2);
        const z2 = new ComplexNumber(3, 4);
        test('addition', () => {
            const sum = complexAdd(z1, z2);
            
            expect(sum.real).toBeCloseTo(4);
            expect(sum.imaginary).toBeCloseTo(6);
        });
        test('subtraction', () => {
            const difference = complexSubtract(z1, z2);
            
            expect(difference.real).toBeCloseTo(-2);
            expect(difference.imaginary).toBeCloseTo(-2);
        });
        test('multiplication', () => {
            const product = complexMultiply(z1, z2);
            
            expect(product.real).toBeCloseTo(-5);
            expect(product.imaginary).toBeCloseTo(10);
        });
        test('division', () => {
            const ratio = complexDivide(z1, z2);
            
            expect(ratio.real).toBeCloseTo(11/25);
            expect(ratio.imaginary).toBeCloseTo(2/25);

            const invalidRatio = complexDivide(ratio, COMPLEX_ORIGIN);
            expect(invalidRatio.real).toBe(NaN);
            expect(invalidRatio.imaginary).toBe(NaN);

        });
    });
    describe('polar to rectangular conversion', () => {
        const angle = Math.PI / 2; // 90°
        const magnitude = Math.sqrt(2);
        const cmpl = ComplexNumber.fromPolar(magnitude, angle);
        expect(cmpl.real).toBeCloseTo(0);
        expect(cmpl.imaginary).toBeCloseTo(Math.sqrt(2));

    });
});
