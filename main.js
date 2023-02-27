
'use strict';

let cars = [
  {
      "color": "gold",
      "make": "dodge",
      "model": "challenger",
      "capacity": 4,
      "year": 2022
  },
  {
      "color": "red",
      "make": "toyota",
      "model": "tundra",
      "capacity": 5,
      "year": 2011
  },
  {
      "color": "blue",
      "make": "ford",
      "model": "mustang gt",
      "capacity": 4,
      "year": 1967
  },
  {
      "color": "yellow",
      "make": "chevy",
      "model": "tahoe",
      "capacity": 9,
      "year": 2018
  },
  {
      "color": "black",
      "make": "subaru",
      "model": "wrx",
      "capacity": 4,
      "year": 2021
  },

]

let car2 = {
  "color": "neon green",
  "make": "toyota",
  "model": "supra",
  "capacity": 2,
  "year": 1998
}

// let car3 = cars.find(car3 => car3.color === "black");
console.log(cars);

let sizes = cars.map(car => {
  if (car.year <= 2012) {
      return "old";
  }
  if (car.capacity <= 2019) {
      return "new-ish";
  }
  return "new";
});
console.log(sizes);

const orderOfFood = [
  {
      menuItem: "cheeseburger",
      price: 8
  },
  {
      menuItem: "steak and egg burrito",
      price: 12
  },
  {
      menuItem: "onion rings",
      price: 5
  }
]


let total = 0;
const costOfFood = orderOfFood.reduce((acumulator, food) => acumulator += food.price, total)
console.log(costOfFood);


const blackCar = cars.filter(car => car.color === "black")
console.log(blackCar);