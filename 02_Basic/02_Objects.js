const user = new Object();
user.email = "yash@google.com";
user.name = "yash savaliya";

// console.log(user);

const regUser = {
  email: "yash@pz.com",
  userName: {
    fullName: {
      firstName: "yash",
      lastName: "savaliya",
    },
  },
};

const abc = {};
console.log(regUser.userName.fullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = Object.assign(obj1, obj2, obj3);
console.log(obj4);
console.log(obj4 === obj1);

const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("email"));

const course = {
  name: "javaScript",
  price: "9999",
  courseInstructore: "yash",
};

const { courseInstructore: instructore } = course;

console.log(instructore);
