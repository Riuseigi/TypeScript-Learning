let age: number = 30;

let firstName: string = "Mario";

let isFictional: boolean;

age = 31;
firstName = "Luigi";
isFictional = true;

let planet = "Earth";
let moon = 1;
let isLarge = false;

planet = "Saturn";
moon = 145;
isLarge = true;

//null & undefined

let something: null;
let anotherThing: undefined;

something = null;
anotherThing = undefined;

// Arrays
let names: string[] = ["mario", "luigi", "Peach"];

let ages: number[] = [35, 32, 52];

names.push("bowser");

ages.push(32);

//Type inference with arrays

let fruits = ["apple", "orange", "banana"];

fruits.push("peach");

const f = fruits[3];
let things = [1, true, "hello"];
//Object Literals
let user: { firstName: string; age: number; id: number } = {
  firstName: "mario",
  age: 30,
  id: 1,
};

user.firstName = "peach";
user.id = 2;

//type inferrence with object literals

let person = {
  name: "luigi",
  score: 35,
};

person.name = "bowser";
person.score = 30;

const score = person.score;
