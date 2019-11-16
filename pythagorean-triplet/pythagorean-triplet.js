const factorPairs = num => {
  let x = 2;
  let max = num / x;
  const pairs = [[1, num]];
  while (x < max) {
    max = num / x;
    if (num % x === 0) pairs.push([x, max]);
    x += 1;
  }
  return pairs;
};

/**
 * Pythagorean Triplet
 */
export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get asArray() {
    return [this.a, this.b, this.c];
  }

  sum() {
    return this.asArray.reduce((sum, d) => sum + d);
  }

  product() {
    return this.asArray.reduce((prod, d) => prod * d);
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }

  static where({ sum, minFactor = 3, maxFactor = 10 }) {
    // Triple loop method does 152096 iterations !!

    // My own first method
    // return Triplet.findTriplets_DoubleLoop(minFactor, maxFactor, sum); // 4656 for maxFactor: 100

    // Dickson's method based on timleach's >> https://exercism.io/tracks/javascript/exercises/pythagorean-triplet/solutions/f5122c1eecd44072aa4d38bb3844ad8e
    return Triplet.findTriplets_Dickson(minFactor, maxFactor, sum); // 316 for maxFactor: 100.
  }

  static findTriplets_DoubleLoop(minFactor, maxFactor, sum) {
    const matchingTriplets = [];
    let iterations = 0;

    for (let b = maxFactor - 1; b >= minFactor + 1; --b) {
      for (let a = b - 1; a >= minFactor; --a) {
        iterations++;
        const c = Math.floor(Math.sqrt(a ** 2 + b ** 2));
        if (c > maxFactor) continue;
        const t = new Triplet(a, b, c);
        if (!t.isPythagorean()) continue;
        if (sum != null && t.sum() !== sum) continue;
        matchingTriplets.push(t);
      }
    }

    console.log(iterations);
    return matchingTriplets;
  }

  /**
   * Dickson's method >> https://en.wikipedia.org/wiki/Formulas_for_generating_Pythagorean_triples
   */
  static findTriplets_Dickson(minFactor, maxFactor, sum) {
    let iterations = 0;
    let matchingTriplets = [],
      exit = false,
      r = 0;
    while (exit === false) {
      r += 2;
      for (let [s, t] of factorPairs(r ** 2 / 2)) {
        iterations++;
        const a = r + s,
          b = r + t,
          c = r + s + t;

        exit = c > maxFactor;
        if (a < minFactor || exit) continue;

        const triplet = new Triplet(a, b, c);
        if (sum == null || triplet.sum() === sum) matchingTriplets.push(triplet);
      }
    }

    console.log(iterations);
    return matchingTriplets;
  }

  toString() {
    return this.asArray.join('');
  }
}
