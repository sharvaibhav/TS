class AreaCalculator {
  private _polygonType: string;
  private _length: number = 2;
  private _breath: number = 4;
  private _radius: number = 8;

  constructor(polygonType: string) {
    this._polygonType = polygonType;
  }
  get length(): number {
    return this._length;
  }
  get breath(): number {
    return this._breath;
  }
  get radius(): number {
    return this._radius;
  }
  get polygonType(): string {
    return this._polygonType;
  }
  set setLength(value: number) {
    this._length = value;
  }
  calculateArea(): number {
    return this.length * this.breath;
  }
}

const myPolygon = new AreaCalculator("circle");
myPolygon.setLength = 4;
console.log(myPolygon.calculateArea());
