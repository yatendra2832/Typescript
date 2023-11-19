"use strict";
/*
function addTwo(num){
    return num + 2;
}
addTwo(5);
// but that will not be the good practice as it goes to the type any
*/
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //now that will not allow to return anything other than the number 
}
// as we want that our function addTwo will return a number we will write that the number  is written after the function addTwo(num:number):number
function getUpper(val) {
    return val.toUpperCase();
}
console.log(addTwo(5));
console.log(getUpper("yatendra singh"));
function signUpUser(name, email, isLoggedIn) {
}
signUpUser("yatendra singh", "yatendrayadav2832@gmail.com", true);
//how to pass the default parameter using the arrow function
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "name:".concat(name, " email:").concat(email, " isPaid:").concat(isPaid);
};
//in that function if we will not passed the parameter then the default false value will return to the loginuser function
console.log(logInUser("yatendra", "yatendrayadav2832@gmail.com", true));
/*************************************************************************** */
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// -----------------------------------------------------------------------------
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(msg) {
    throw new Error(msg);
}
