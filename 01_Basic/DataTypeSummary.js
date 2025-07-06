// Primitive dataTypes - Referenced by value

// 7 Types : String, Number, Boolean, null, Undifined, BigInt, Symbol

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id == anotherId);

// Referenced (Non-Primitive DataType)

//Arrays, Objects, Functions
const heros=["abc","cde","efg"]
const myObj = {
    name:"yash",
    age:25
}
const myFunction = function () {
    console.log("Hello world")
}