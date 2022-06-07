const data = {
  firstName: "Harry",
  lastName: "Potter",
  age: 20,
  isMuggle: false,
  stuff: ["Magic wand", "Flying car"],
};

console.log(data);
console.log(typeof data);

const isString = "10";
const isRealString = 10;

console.log(isString == isRealString);
console.log(isString === isRealString);

const a = 10;
const b = 12;

const res = console.log(a < 15 && b > 10);
