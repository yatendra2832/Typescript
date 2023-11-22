const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(
  val: boolean | number | string
): boolean | number | string {
  return val;
}
// generic : generic is the ability to write a function that can work with multiple data types
function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

const output = identityThree<string>("Hello");
console.log(output);

function identityFour<Type>(val: Type): Type {
  return val;
}

interface bottle {
  brand: string;
  type: number;
}

identityFour<bottle>({
  brand: "Coca Cola",
  type: 1,
});

function getSearchProducts<Type>(products: Type[]): Type[] {
  // do some database operation with products
  const myIndex = 3;
  return products;
}

const getMoreProducts = <Type>(products: Type[]): Type => {
  // do some database operation with products
  const myIndex = 3;
  return products[myIndex];
};

function studentDetails (name:string,Id:number):object{
    return {
      name:"yatendra",
      Id:211
    }
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T extends Database>(data: T): object {
    return {
        data
    };
}

let connection = anotherFunction({
    connection: "mongodb",
    username: "root",
    password: "123456"
})
console.log(connection);

interface Quiz{
    name: string,
    type:string
}

interface Course{
    name: string,
    author:string,
    subject:string
}

class Sellable <T> {
    public cart: T[] = [];

    addToCart(products: T) {
        this.cart.push(products);
    }
}









