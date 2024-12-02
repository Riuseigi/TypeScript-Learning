"use strict";
let myname = "shaun";
function reverse(str) {
    return str.split("").reverse().join("");
}
const result = reverse("hello");
console.log(result);
function printMenu(item) {
    console.log(item.title, ":", item.cost);
}
printMenu();
