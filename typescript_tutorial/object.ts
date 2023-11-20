/*const User={
    name:"yatendra",
    email:"yatendrayadav2832@gmail.com",
    isActive:true
}
//the use case of the object is through the functions  you have to actually pass the object as an argument into the function or you have to retur some objects through the function.

function createUser({name: string="john", isPaid:boolean=true}){}
createUser({name:"yatendra", isPaid:true})


function createCourse():{name:string , price:number}{
        return {
            name:"reactjs",price:399
        }
}
// This code defines a function called createCourse that returns an object with two properties: name (which is a string) and price (which is a number). The function always returns an object with the name "reactjs" and the price 399.
*/
/******************************************************** */
// TYPE ALIASES
type User={
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user: User) {
    console.log(`User Name:${user.name} User Email:${user.email} User Activation: ${user.isActive}`);
}

// Example usage:
const newUser: User = {
    name: "yatendra",
    email: "yatendrayadav2832@gmail.com",
    isActive: true
}

createUser(newUser);












export{}