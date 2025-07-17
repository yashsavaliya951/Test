let a = 300;
if (true) {
  let a = 30;
  console.log("INNER : " + a);
}
console.log(a);

function one() {
  const userName = "yash";
  function two() {
    const web = "youtube";
    console.log(userName);
  }
  two();
}
one();

console.log(addOne(10));
function addOne(number) {
  return number + 1;
}

console.log(addTwo(10)); //it's not work
const addTwo = function (number) {
  return number + 2;
};
