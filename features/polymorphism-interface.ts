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

const carMapper: { [key: string]: Car } = {
  vaibhav: new Ford(),
  saurabh: new Mg()
};

const myCar: Car = carMapper["vaibhav"];
