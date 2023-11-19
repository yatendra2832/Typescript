"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello World";
// greetings = true; that will not allowed by the typescript compiler as we declare the greetings to be the string type sowe cannot decalre the other types of variable to the greetings
// by that greeting variable we can access the methods of the string  and we can apply the methods on the variable
console.log(greetings);
// console.log(greetings.toUpperCase());
// number
var userId = 232209;
console.log(userId);
// boolean 
var isLoggedIn = false;
console.log(isLoggedIn);
//any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
console.log(hero);
