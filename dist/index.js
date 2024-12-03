"use strict";
let age = 30;
let firstName = "Mario";
let isFictional;
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
let something;
let anotherThing;
something = null;
anotherThing = undefined;
// Arrays
let names = ["mario", "luigi", "Peach"];
let ages = [35, 32, 52];
names.push("bowser");
ages.push(32);
//Type inference with arrays
let fruits = ["apple", "orange", "banana"];
fruits.push("peach");
const f = fruits[3];
let things = [1, true, "hello"];
//Object Literals
let user = {
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
function addTwoNumbers(a, b) {
    return a + b;
}
const subractTwoNumber = (a, b) => {
    return a - b;
};
// addTwoNumbers("a", "b");
function addAllNumber(items) {
    const total = items.reduce((a, b) => a + b, 0);
    // console.log(total);
    return total;
}
addTwoNumbers(3, 5);
addAllNumber([5, 6, 7, 8, 9]);
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting("Mario", "Mama mia");
console.log(result);
//any type
let aged;
let title;
aged = 35;
aged = false;
title = {
    hello: "world",
};
//any type in Array
let somethings = [12, "asdasdasd", true, null];
somethings.push({ id: 123 });
//Functions in Array
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(3);
