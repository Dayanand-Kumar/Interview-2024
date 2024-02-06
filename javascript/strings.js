//3.string count => here counts white spaces also.
const myString = "I love Coding";
console.log("string length", myString.length)

//2.trim =>
const myString_1 = " I love Coding "
console.log("trim =>",myString_1.length) //15 (all white spaces are counted.)
console.log("trim => ",myString_1.trim().length) // 13 (starting and ending white spaces are removed.)

//3.split
const myString_2 = "I love coding";
console.log("split the string => ", myString_2.split(" ")); //splitting happend based on the white spaces and stores in the array.
//or in the another way
const split_array = myString_2.split(" ");
const lengthOfArray = split_array.length;
console.log("The Length Of The Array =>", lengthOfArray)

//4.includes
const myString_3 = "I love Coding";
if(myString_3.includes("coding")){
    console.log("includes => Yes, the string is available");
}else{
    console.log("includes => No, the string is not available")
}
//Note : the string is case sensitive. 

//5.charAt --> here the counting starts from 0123456789.... 
const myString_4 = "I love Coding";
const getChar = myString_4.charAt(7);
console.log("charAt =>",getChar);

//6.slice
const myString_5 = "I love Coding";
const getSlice = myString_5.slice(2,6);
console.log("sliced Data =>", getSlice);
//Note: get the data (n, n-1) & starts from 0123.....

//7.toLowerCase
const myString_6 = "I LOVE CODING";
console.log("toLowerCase =>", myString_6.toLowerCase());

//8.toUpperCase
const myString_7 = "i love coding";
console.log("toUpperCase =>", myString_7.toUpperCase())

//9.Replace
const myString_8 = "I love Coding";
console.log("Replacing the string => ", myString_8.replace("Coding", "Programming"));
//Note: which is a case sensitive

//10.Concat
const myString_9 = "I love Coding";
const myString_10 = "& Designing";
console.log("Concatinating the strings => ", myString_9.concat(' ',myString_10));
//Note: it should follow the order eg: 1.concat(2)

//11.Starts with
const myString_11 = "I love Coding";
if(myString_11.startsWith("coding")){
    console.log("Starts with => the statement is starting with coding");
}else{
    console.log("Starts with => the statement is not starting with coding")
}

//12. Ends with
const myString_12 = "I love Coding";
if(myString_12.endsWith("Coding")){
    console.log("Ends with => the statement is ends with coding");
}else{
    console.log("Ends with => the statement is not ends with Coding")
}

//13.