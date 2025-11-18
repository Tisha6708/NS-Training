//DESTRUCTURING

const colors = ["red", "blue", "green"];
const [primary, secondary, accent] = colors;
console.log(primary, secondary, accent);


const user = { name: "Tisha", age: 20, city: "Indore" };
const { name, age, city } = user;
console.log(name, age, city);


function printDetails({ brand, price }) {
  console.log(`Brand: ${brand}, Price: ${price}`);
}

const laptop = { brand: "HP", price: 55000 };
printDetails(laptop);


const student = {
  id: 101,
  marks: {
    math: 88,
    science: 92,
  },
};

const { marks: { math, science } } = student;
console.log(math, science);


const arr = [10];
const [a, b = 20] = arr;
console.log(a, b); // 10, 20




//NORMAL FUNCTION TO ARROW FUNCTION

function add(a, b) {
  return a + b;
}
const add = (a, b) => a + b;


function greet(name) {
  return "Hello " + name;
}
const greet = (name) => `Hello ${name}`;


function isEven(n) {
  return n % 2 === 0;
}
const isEven = (n) => n % 2 === 0;


function firstItem(arr) {
  return arr[0];
}
const firstItem = (arr) => arr[0];


function log(message) {
  console.log("Log:", message);
}
const log = (message) => console.log("Log:", message);
