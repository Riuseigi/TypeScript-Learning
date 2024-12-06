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
//tuples
let persons = ["mario", 35, true];
//tuples example
let hsla;
hsla = [200, "100%", "50%", 34];
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//named tuples
let users;
users = ["Luigi", 34];
console.log(users[0]);
const authorOne = {
    name: "mario",
    avatar: "mario.png",
};
const newPost = {
    title: " Legend of Zelda",
    body: "Link saves Zelda",
    tags: ["gaming", "fantasy", "Hero"],
    create_at: new Date("10-24-2024"),
    author: authorOne,
};
// interface as function argument types
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//interfaces with arrays
let posts = [];
posts.push({
    title: "Xenoblade",
    body: "Sci-fi Story",
    tags: ["Sci-fi", "Romance", "RPG"],
    create_at: new Date("10-24-2024"),
    author: { name: "Rex", avatar: "rex.png" },
});
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
const userOne = {
    name: "Zelda",
    score: 75,
};
function formatUser(user) {
    console.log(`${user.name} has score of ${user.score}`);
}
// formatUser(userOne);
// formatUser({ name: "Link", score: 34 });
// Union types
let someId;
someId = 1;
someId = "2";
let email = null;
email = "riammutempest@gmail.com";
email = null;
let anotherID;
anotherID = "123wqdaqw";
anotherID = 5;
// Union Type pitfall
function swapIdType(id) {
    //can only use props and methods common to
    //both number and string types
    // parseInt(id) --> not allowed
    return id;
}
swapIdType("5");
function swapId(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapId(1);
const idTwo = swapId("2");
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    if (value.type === "person") {
        console.log(value.firstName, value.age);
    }
}
