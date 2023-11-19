/*
function addTwo(num){
    return num + 2;
}
addTwo(5);
// but that will not be the good practice as it goes to the type any 
*/

function addTwo(num:number):number{
    return num+2;
    //now that will not allow to return anything other than the number 
}
// as we want that our function addTwo will return a number we will write that the number  is written after the function addTwo(num:number):number

function getUpper(val:string){
    return val.toUpperCase();
}

console.log(addTwo(5));
 console.log(getUpper("yatendra singh"));

 function signUpUser(name:string , email:string , isLoggedIn:boolean ){

 }

 signUpUser("yatendra singh","yatendrayadav2832@gmail.com",true);

 //how to pass the default parameter using the arrow function
 let logInUser = (name:string, email:string, isPaid:boolean =false) =>{
return `name:${name} email:${email} isPaid:${isPaid}`
 }
//in that function if we will not passed the parameter then the default false value will return to the loginuser function
 console.log(logInUser("yatendra","yatendrayadav2832@gmail.com",true));

 /*************************************************************************** */
 const heros = ["thor", "spiderman", "ironman"];
 heros.map((hero):string =>{
    return `hero is ${hero}`
 })

// -----------------------------------------------------------------------------
function consoleError(errmsg:string):void{
    console.log(errmsg);
}

function handleError(msg:string):never{
    throw new Error(msg);
}









export{}