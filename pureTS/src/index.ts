// console.log("typescript is here");
// console.log("Another typescript code")
/*
class User {
    name: string;
    email: string;
    isActive: boolean;
    constructor(name: string, email: string, isActive: boolean) {
        this.name = name;
        this.email = email;
        this.isActive = isActive;
    }
};

// This code defines a constructor function for a class. It takes in three parameters - name, email, and isActive - and assigns them to corresponding properties of the class instance.

const yatendra =new User("yatendra", "yatendrayadav2832@gmail.com", true);
console.log(yatendra)
yatendra.name.toUpperCase();
console.log(yatendra.name)

yatendra.name=yatendra.name.toUpperCase();
console.log(yatendra.name);
*/
/*The toUpperCase() method returns a new string in uppercase. It does not modify the original string.

In your code, calling yatendra.name.toUpperCase() returns a new string in uppercase, but you are not assigning it back to yatendra.name. To change the name to uppercase, you need to assign the result of toUpperCase() back to yatendra.name, like this:
yatendra.name=yatendra.name.toUpperCase();
*/

// we can make private to any thing in the class using the private keyword

class User {
    // name: string;
    // email: string;
    // isActive: boolean;
    constructor(public name: string, public email: string, public isActive: boolean) {
        this.name = name;
        this.email = email;
        this.isActive = isActive;
    }
};

// getter and setter method in TS
class Employee {
    private empCount =108
    readonly city: string = 'Jaipur'
    // workCount :number =2
    constructor(
        public email : string ,
        public name  : string ,
        private empID : number
    ){}

    private deleteToken(){
        console.log("Token Deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    get workCount() : number {
        return this.workCount
    }

    set workCount(workNum){
       if (workNum<=1){
        throw new Error("Work should be more than 1");
       }
       this.workCount=workNum
    }
}
// getter will return something , setter will not return anything 
// public and private are the access modifiers how they are accessible in the code that will define by the public and private  defining

class manager extends Employee {
    // in inheritance class the private members are not accessible to the extended classes
    isFamily:boolean =true
    // empCount =255
    /*Class 'manager' incorrectly extends base class 'Employee'.
  Property 'empCount' is private in type 'Employee' but not in type 'manager'*/

//   We also have the access modifier protected that will make the method and properties to be inherited but only to the class not to the object or the instance of the class
}

// abstract Class
class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter :string
    ){}
}

// class instagram extends TakePhoto("test","B&W")
 const hc = new TakePhoto("test","test2")





















