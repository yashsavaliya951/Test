const arr = [1, 2, 3, 4, 5, 6];

for (const i of arr) {
  console.log(i);
}

//Maps
const map = new Map();
map.set("IN", "India");
map.set("CA", "Canada");
map.set("US", "America");

for (const [key, value] of map) {
  console.log(key + ":-" + value);
}

//objects
const myObj = {
  js: "javaScript",
  jv: "JAVA",
  pt: "python",
};

for (const key in myObj) {
  console.log(`${key} key for : ${myObj[key]}`);
}

//for each
const coding = ["java", "paython", "js", "cpp"];

coding.forEach(function (val) {
  console.log(val);
});
