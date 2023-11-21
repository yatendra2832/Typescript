// Yatendra.db_id=2333 //Cannot assign to 'db_id' because it is a read-only property
/*
interface is a type that describes an object or a function that has properties and methods
*/
var Yatendra = {
    db_id: 1001,
    name: "Yatendra",
    email: "Yatendra@123",
    isActive: true,
    githubToken: "github",
    startTrial: function () {
        return "Trial Started"; // this is a compulsory part that we have to return the string from the function
    },
    getCoupon: function (couponName, value) {
        if (couponName === "10%OFF") {
            return value;
        }
        return 10;
    }
};
var Ys = {
    db_id: 1001,
    name: "Yatendra",
    email: "Yatendra@123",
    isActive: true,
    githubToken: "github",
    role: "admin",
    startTrial: function () {
        return "Trial Started"; // this is a compulsory part that we have to return the string from the function
    },
    getCoupon: function (couponName, value) {
        if (couponName === "10%OFF") {
            return value;
        }
        return 10;
    }
};
