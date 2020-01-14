interface Car {
  drives(speed: number): void;
  stops(): void;
}

class Mg implements Car {
  drives = (speed: number) => {
    console.log("MG driving the car at " + speed);
  };
  stops = () => {
    console.log("MG car is stopped");
  };
}

class Ford implements Car {
  drives = (speed: number) => {
    console.log("Ford driving the car at " + speed);
  };
  stops = () => {
    console.log("For car is stopped");
  };
}

class System {
  myCar: Car;
  carMap: { [index: string]: Car } = {
    vaibhav: new Ford(),
    saurabh: new Mg()
  };
  constructor(objectType: string) {
    this.myCar = this.carMap[objectType];
    this.myCar.drives(52);
  }
}

const system = new System("saurabh");
