const userEmail = "yash@pz.com";

if (userEmail) {
  console.log("got email");
} else {
  console.log("don't have email");
}

//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,Nan         other than this is truly

// truthy values
// '0',"false"," ",[],{},function(){}

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("this is empty object");
}

// Nullish Coalescing Operator (??)
let var1;
var1 = 5 ?? 10;

console.log(var1);

var1 = null ?? 10;
var1 = undefined ?? 10;
console.log(var1);
