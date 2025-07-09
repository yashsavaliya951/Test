function addTwoNum(number1, number2) {
  return number1 + number2;
}

const result = addTwoNum(2, 5);
console.log(result);

function loggingUser(userName = "abc") {
  if (!userName) {
    return "Please enter userName";
  }
  return `${userName} just logged in`;
}

console.log(loggingUser("yash"));

function calCartPrice(...num) {
  return num;
}

console.log(calCartPrice(100, 200, 300, 500));

const regUser = {
  email: "yash@pz.com",
  userName: "yash",
};

function handleObject(anyObject) {
  console.log(anyObject.email);
  console.log(anyObject.userName);
}

handleObject(regUser);
