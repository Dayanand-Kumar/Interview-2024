//JS date methods.
const date = new Date();
console.log("Date => ", date); //2024-02-07T19:52:56.330Z

console.log("getDate =>", date.getDate());
console.log("getMonth =>", date.getMonth() +1); //it starts with the index 0.
console.log("get full year => ", date.getFullYear()); 
console.log("get Hours => ", date.getHours());
console.log("get minutes => ", date.getMinutes());
console.log("get Seconds => ", date.getSeconds());
console.log("get milliseconds => ", date.getMilliseconds());

//Time
console.log("get time => ", date.getTime());
console.log("set Date => ", date.setDate(23));
console.log("set Month => ", date.setMonth(3));
console.log("set Full Year => ", date.setFullYear(2024));
console.log("set Hours => ", date.setHours(10));
console.log("set Minutes => ", date.setMinutes(45));
console.log("set Seconds => ", date.setSeconds(49));
console.log("set milliSeconds => ", date.setMilliseconds(176));
console.log("set time => ", date.setTime(1713816036932));




