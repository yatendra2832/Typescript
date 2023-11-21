// Yatendra.db_id=2333 //Cannot assign to 'db_id' because it is a read-only property
/*
interface is a type that describes an object or a function that has properties and methods 
*/


interface User {
    readonly db_id: number;
    name: string;
    email: string;
    isActive ?: boolean;
    // startTrial:() => string;
    startTrial(): string;
    getCoupon(couponName: string, value: number): number;
}

// that is also known as the reopening of the interface
interface User {
    githubToken : String
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}


let Yatendra: User = {
    db_id: 1001,
    name: "Yatendra",
    email: "Yatendra@123",
    isActive: true,
    githubToken: "github",
    startTrial: () => {
        return "Trial Started" // this is a compulsory part that we have to return the string from the function
    },
    getCoupon(couponName: string, value: number): number {
        if (couponName === "10%OFF") {
            return value;
        }
        return 10;
    }
}

let Ys: Admin = {
    db_id: 1001,
    name: "Yatendra",
    email: "Yatendra@123",
    isActive: true,
    githubToken: "github",
    role: "admin",
    startTrial: () => {
        return "Trial Started" // this is a compulsory part that we have to return the string from the function
    },
    getCoupon(couponName: string, value: number): number {
        if (couponName === "10%OFF") {
            return value;
        }
        return 10;
    }
}




















