var superHeros = [];
superHeros.push("spiderman");
// superHeros.push(23)//we cannot push to the array of strings because it is a string array
// Another syntax for an array declaration
var superHeros2 = [];
var Users = [
    {
        name: "John",
        isActive: true
    },
    {
        name: "Jane",
        isActive: false
    },
    {
        name: "Jim",
        isActive: true
    },
    {
        name: "Jill",
        isActive: false
    }
];
Users.push({ name: "Jenny", isActive: true });
for (var i = 0; i < Users.length; i++) {
    console.log(Users[i]);
}
