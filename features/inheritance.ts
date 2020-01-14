class Dog {
  bark() {
    console.log("barking");
  }
  bite() {
    console.log("bitten");
  }
  run() {
    console.log("run");
  }
}

class Alsatian extends Dog {
  bark() {
    console.log("alsation");
    super.bark();
  }
}

class GreatDane extends Dog {
  _name: string;
  _height: string;
  _age: number;

  constructor() {
    super();
    this._name = "hello";
    this._height = "24in";
    this._age = 32;
  }
}

const myDog = new Alsatian();
myDog.bark(); // overriding the function
myDog.run(); // calling the base class function
