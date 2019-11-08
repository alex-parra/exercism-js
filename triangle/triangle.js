export class Triangle {

  constructor(leftLength, rightLength, bottomLength) {
    this.leftLength = leftLength;
    this.rightLength = rightLength;
    this.bottomLength = bottomLength;
  }

  isInvalid() {
    const { leftLength, rightLength, bottomLength } = this;
    const sides = [leftLength, rightLength, bottomLength];
    if( sides.some(side => !side || isNaN(side) ) ) {
      return 'All sides must be bigger than 0';
    }

    const leftRight = leftLength + rightLength;
    const rightBottom = rightLength + bottomLength;
    const bottomLeft = leftLength + bottomLength;

    if( leftRight < bottomLength || rightBottom < leftLength || bottomLeft < rightLength ) {
      return 'Sides dont meet Triangle Inequality.';
    }

    return false;
  }

  kind() {
    const error = this.isInvalid();
    if( error ) throw new Error(error);

    const { leftLength, rightLength, bottomLength } = this;
    if( leftLength === rightLength && rightLength === bottomLength ) {
      return 'equilateral';
    }
    if( leftLength === rightLength || leftLength === bottomLength || rightLength === bottomLength ) {
      return 'isosceles';
    }
    return 'scalene';
  }

}
