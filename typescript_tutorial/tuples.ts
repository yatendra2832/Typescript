// tuples: fixed length and fixed type it is an  special type of array that has fixed length and fixed type 
// const user: (number | string)[] = [1,"ys"];
let user: [number, string, boolean] ;
let user1=[1,"ys",true];
//here is a strong pattern that we can use in our code for tuples here is no reversing in the order of the elements if any of the elements are of different type then it will throw an error in the code it will not work 

let rgb: [number, number, number] = [255, 255, 255];
//  that will ensure that the first element is a number, the second element is a number, and the third element is a number in the tuple. 

type user = [number, string]

const newUser: user = [1, "ys"];

newUser[1]="Yatendra Singh";
console.log(newUser[1]);
// newUser.push(true); that will not allow to push in the tuple.

////////////////////////////////////////////////////













export{}

