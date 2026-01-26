const nums = [1, 2, 3, 4, 5, 6, 7];

//filter
const newNum = nums.filter((n) => {
  return n > 4;
});

console.log(newNum);

//map
const numsMap = nums.map((n) => n + 10);
console.log(numsMap);

//chain
const chain = nums
  .map((n) => n * 10)
  .map((n) => n + 1)
  .filter((n) => n > 40);
console.log(chain);

//reduce
const total = nums.reduce((acc, currval) => {
  return acc + currval;
}, 3);

console.log(total);
