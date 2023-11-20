"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tuples: fixed length and fixed type it is an  special type of array that has fixed length and fixed type 
// const user: (number | string)[] = [1,"ys"];
var user;
var user1 = [1, "ys", true];
//here is a strong pattern that we can use in our code for tuples here is no reversing in the order of the elements if any of the elements are of different type then it will throw an error in the code it will not work 
var rgb = [255, 255, 255];
var newUser = [1, "ys"];
newUser[1] = "Yatendra Singh";
console.log(newUser[1]);
