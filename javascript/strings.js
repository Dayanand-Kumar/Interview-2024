//3.string count => here counts white spaces also.
const myString = "I love Coding";
console.log(myString.length)

//2.trim =>
const myString_1 = " I love Coding "
console.log(myString_1.length) //15 (all white spaces are counted.)
console.log(myString_1.trim().length) // 13 (starting and ending white spaces are removed.)

//3.split
const myString_2 = "I love coding";
console.log(myString_2.split(" ")); //splitting happend based on the white spaces and stores in the array.
//or in the another way
const split_array = myString_2.split(" ");
const lengthOfArray = split_array.length;
console.log("The Length Of The Array =>", lengthOfArray)

//4.includes
const myString_3 = "I love Coding";
if(myString_3.includes("coding")){
    console.log("Yes, the string is available");
}else{
    console.log("No, the string is not available")
}
//Note : the string is case sensitive. 

//5.charAt --> here the counting starts from 0123456789.... 
const myString_4 = "I love Coding";
const getChar = myString_4.charAt(7);
console.log(getChar);

//6.
