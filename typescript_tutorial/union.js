"use strict";
// Union:union is a type that can be one of two or more types of data at the same time. it is just like a combination of two or more types.
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = true;
score = "Done!";
var yatendra = {
    name: "yatendra",
    id: 1,
    isActive: true,
};
//here yatendra is the simple user
yatendra = {
    userName: "yatendra",
    id: 1,
};
// that is allow as we define it can be user as well as it can be as admin
function getDbId(id) {
    console.log("Db id is ".concat(id));
}
function getDbId2(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    //    that will check if the id type is string then it will convert it to lower case otherwise it will do nothing or do what the next function does
}
// Array
// const data: number[] | string[]=[1,2,3,"4","5"]// that will shows the error as in TS in array we can have only one type of data if number then all the numbers and if string then all the strings
// there are some of the important usecase of the union when we know we have some fixed options and we know we have to select from that only not other than that we can use union
var seats;
seats = 'aisle'; // that is valid
