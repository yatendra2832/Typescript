let greetings: string = "Hello World";

// greetings = true; that will not allowed by the typescript compiler as we declare the greetings to be the string type sowe cannot decalre the other types of variable to the greetings
// by that greeting variable we can access the methods of the string  and we can apply the methods on the variable

console.log(greetings)
// console.log(greetings.toUpperCase());

// number
let userId: number =232209;
console.log(userId);

// boolean 
let isLoggedIn: boolean=false;
console.log(isLoggedIn);

//any
let hero;
function getHero() {
    return "thor"
}
hero=getHero()
console.log(hero)




export{}