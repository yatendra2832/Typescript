"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    console.log("User Name:".concat(user.name, " User Email:").concat(user.email, " User Activation: ").concat(user.isActive));
}
// Example usage:
var newUser = {
    name: "yatendra",
    email: "yatendrayadav2832@gmail.com",
    isActive: true
};
createUser(newUser);
