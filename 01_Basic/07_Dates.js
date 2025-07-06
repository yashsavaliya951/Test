const date = new Date();    //UTC
console.log(date);

// const newDate = new Date(2025,1,1);
const newDate2 = new Date(2025,0,1,5,3,20);
const newDate = new Date("2025-01-25");
console.log(newDate.toLocaleString());
console.log(newDate2.toDateString());
console.log(newDate.getTime());

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));

