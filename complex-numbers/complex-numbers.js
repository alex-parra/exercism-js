
export class ComplexNumber {
  constructor(a, b) {
    this._real = a;
    this._imaginary = b;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imaginary;
  }

  // (a + bi) + (c + di) = (a + c) + (b + d)i
  add(complexNumber) {
    const newReal = this.real + complexNumber.real;
    const newImaginary = this.imag + complexNumber.imag;
    return new ComplexNumber(newReal, newImaginary);
  }

  // (a + bi) - (c + di) = (a - c) + (b - d)i
  sub(complexNumber) {
    const newReal = this.real - complexNumber.real;
    const newImaginary = this.imag - complexNumber.imag;
    return new ComplexNumber(newReal, newImaginary);
  }

  // (a + bi) / (c + di) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2)i
  div(complexNumber) {
    const cnSquare = complexNumber.real**2 + complexNumber.imag**2;
    const newReal = (this.real * complexNumber.real + this.imag * complexNumber.imag) / cnSquare;
    const newImaginary = (this.imag * complexNumber.real - this.real * complexNumber.imag) / cnSquare;
    return new ComplexNumber(newReal, newImaginary);
  }

  // (a + bi) * (c + di) = (a * c - b * d) + (b * c + a * d)i
  mul(complexNumber) {
    const newReal = this.real * complexNumber.real - this.imag * complexNumber.imag;
    const newImaginary = this.imag * complexNumber.real + this.real * complexNumber.imag;
    return new ComplexNumber(newReal, newImaginary);
  }

  // |(a + bi)| = sqrt(a^2 + b^2)
  get abs() /* : number */ {
    return Math.sqrt( this.real**2 + this.imag**2 );
  }

  // a - bi
  get conj() {
    return new ComplexNumber(this.real, this.imag !== 0 ? -this.imag : 0);
  }

  // e^(a + bi) = e^a * e^(i * b) [where] e^(i * b) = cos(b) + i * sin(b) [Euler's formula]
  // So... e^(a + bi) = e^a * cos(b) + sin(b)i
  get exp() {
    const newReal = Math.exp(this.real) * Math.cos(this.imag);
    const newImaginary = Math.sin(this.imag);
    return new ComplexNumber(newReal, newImaginary);
  }

}
