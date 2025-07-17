const user = {
  userName: "yash Savaliya",
  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website `);
    console.log(this);
  },
};

user.welcomeMessage();
user.userName = "yash";
user.welcomeMessage();

console.log(this);

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(3, 4));
