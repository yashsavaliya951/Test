// Singlton
// Object.create()

//object literals
const syb = Symbol("key");

const obj1 = {
  name: "yash",
  "full Name": "yash savaliya",
  email: "yash@google.com",
  [syb]: "myKey",
  age: 25,
  location: "gujarat",
  isLoggedIn: false,
  lastLoggin: ["monday", "friday"],
};

console.log(obj1.name);
console.log(obj1["full Name"]);
console.log(obj1[syb]);

obj1.email = "yash@pzone.com";
// Object.freeze(obj1);
obj1.email = "yash@chatgpt.com";
console.log(obj1);

obj1.greeting = function () {
  console.log("hello user");
};

obj1.greeting2 = function () {
  console.log(`hello user ${this["full Name"]}`);
};

obj1.greeting();
obj1.greeting2();
