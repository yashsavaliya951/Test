let score = "33";
let scoreS = "33abc";
let isNum = true;

let valueInNum = Number(score);
console.log(typeof valueInNum);
console.log(valueInNum);            //number "33" => 33

let valueInNumS = Number(scoreS);
console.log(typeof valueInNumS);
console.log(valueInNumS);          //NaN 

let valueInNumB = Number(isNum);
console.log(typeof valueInNumB);
console.log(valueInNumB);           //number true=> 1, false=> 0


let isLogged = 0;
let isLoggedWithBoolean = Boolean(isLogged)
console.log(isLoggedWithBoolean);
console.log(typeof isLoggedWithBoolean);  //0=> false 1=> true, ""=> false, "yash"=> true

