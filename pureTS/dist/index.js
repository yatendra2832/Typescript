"use strict";
// console.log("typescript is here");
// console.log("Another typescript code")
class User {
    constructor(name, email, isActive) {
        this.name = name;
        this.email = email;
        this.isActive = isActive;
    }
}
;
// This code defines a constructor function for a class. It takes in three parameters - name, email, and isActive - and assigns them to corresponding properties of the class instance.
const yatendra = new User("yatendra", "yatendrayadav2832@gmail.com", true);
console.log(yatendra);
