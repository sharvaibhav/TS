abstract class Shoe {
  laces: number;
  constructor() {
    this.laces = 1;
  }
  abstract run(speed: number): void;
}

class Reebok extends Shoe {
  run(speed: number) {
    console.log("This is a Reebok show  you can run at " + speed + "km/hr");
  }
}
class Nike extends Shoe {
  run(speed: number) {
    console.log("This is a Reebok show  you can run at " + speed + "km/hr");
  }
}

const shoeMapper: { [key: string]: Shoe } = {
  vaibhav: new Reebok(),
  saurabh: new Nike()
};

let myShoes: Shoe;

myShoes = shoeMapper["vaibhav"];

myShoes.run(22);
