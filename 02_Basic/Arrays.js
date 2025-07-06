const myArr = [0, 1, 2, 3, 4, "yash", true]

const myArr2 = ["kdskjd","sjdhs"]
console.log(myArr);

const myArr3 = new Array(1,2,3,4)
console.log(myArr3);

myArr.pop()
myArr.push(9)

myArr.shift()
myArr.unshift(-1)

console.log(myArr)

const nArr =[0,1,2,3,4,5]
console.log(nArr.join("-"));

console.log(nArr);

console.log(nArr.slice(1,3));
console.log(nArr);
console.log(nArr.splice(1,3));
console.log(nArr);

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
arr1.push(arr2)
console.log(arr1);

const arr3= arr1.concat(arr2);
console.log(arr3);

const new_arr = [...arr1,...arr2]
console.log(new_arr);

const nArr1 = [1,2,[3,4,5],6,7,[8,9,[5,6]],6]
const arry = nArr1.flat(Infinity);
console.log(arry);

console.log(Array.isArray("yash"));
console.log(Array.from("yash"));
console.log(Array.from({name:"yash"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
