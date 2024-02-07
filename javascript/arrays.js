//1.value()
//Def: this method returns an iterator that provides the values for each index in the array. it takes no arguments
const arr = ['apple', 'banana', 'cherry'];
const iterator = arr.values();
for(const value of iterator){
    console.log("Iterator => ", value);
}

//2. length
//Def: This property returns the length.
const arr_1 = ['apple', 'banana', 'cherry'];
console.log("Length of the array =>", arr_1.length)

//3.isArray
//Def: this method determines whether the passed value is an array or not.
//it returns boolean
const arr_2 = ['apple', 'banana', 'cherry'];
console.log("isArray method => ", Array.isArray(arr_2));

const arr_3 = 12345;
console.log("isArray method =>", Array.isArray(arr_3));

//4.filter
//Def: This method creates a new array with all elements that pass the test implemented by the provided function.
const numbers = [10,20,30,40];
const filterdNumbers = numbers.filter(number =>{
    return number > 20;
});
console.log("filter method => ", filterdNumbers);

//5.forEach
//def: method executes a provided function once for each array element. It doesn't return anything, it just executes the callback function on each element of array.
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(item){
    console.log("forEach iteration =>", item)
})

//6.shift
//def: Method removes the first element from an array and returns that removed element. This method changes the length of the array.
let fruits_1 = ['apple', 'banana', 'cherry'];
let shiftFruit = fruits_1.shift();
console.log("Shiift Method =>", shiftFruit);
console.log("after applying the shift methid the fruits array is: ", fruits_1)

//7.findIndex
//Def: this method returns the index if the first element in an array that passes a test(provided as a function). if no element passes the test, it returns -1.
const arr_4 = [10,20,30,40,50];
const greaterThan30 = (item) => item >30;
console.log("findIndex =>", arr_4.findIndex(greaterThan30))

//8.find
//Def: This method returns the value of the first element in an array that passses a test (provided as a function). if no element passes the test , it returns undefined.
const arr_5 = [10,20,30,40,50,60];
const greaterThan20 = (num) => num > 20; // function 
const result_1 = arr_5.find(greaterThan20); //testing the function here.
console.log("Find method =>",result_1)

//9.of
//Def: This method creates a new array instance with a variable number of arguments, regardlessof number or type of the arguments.
console.log("of Method =>", Array.of(1,2,3,4,"Hello", "Array"));

//10.every
//Def:This method checks if all elements in an array pass atest(provided as a function).Itreturns true if all elements pass the test , otherwise, it returns false.
const arr_6 = [2,4,6,8]
const isEven = (num) => num %2 === 0; //we are collecting the evennumbers
const result_2 = arr_6.every(isEven); // we are checking the collected numbers are even or not.
console.log("every Method.",result_2);

//11.slice
//Def: This method returns shallow copy of a portion of an array into a new array object selected from begin to end (end is not included)
//(n, n-1)
const arr_7 = [1,2,3,4,5];
const slicedArr = arr_7.slice(2,4)// following (n, n-1)
console.log("Sliced Array => ", slicedArr);

//12.flatMap
//Def: This method maps each element using a mapping function, then flattens the result into a new array.
const arr_8 = [1,2,3];
const result_3 = arr_8.flatMap(x => (x*2)) //doning some modifications on the given array as per the requirement and giving a new array.
console.log("flatMap method =>", result_3)

//13.reverse
//Def: This method reverses the order of the elements in the array.
const arr_9 = ['apple', 'banana', 'cherry'];
const reverseArray = arr_9.reverse();
console.log("Reverse the array => ", reverseArray)

//14.sort
//Def:This method sorts the elements of an arrayt in place and returns the sorted array.It can take an optional compare function as an argument.
const arr_10 = ['orange','banana', 'apple', 'cherry'];
const sortedArray = arr_10.sort();
console.log("Sorted Array =>", sortedArray);

//from
//Def: This method creates a new array from an array-like object or an iterable object. It can take upto two arguments: the object to convert to an array, and a mapping function to apply to each element of the new array.
const obj_1 = {0 : 'apple', 1 : 'banana', 2: 'cherry', length: 3} // in this "length" should be given correctly if not we will get the empty array.
const arr_11 = Array.from(obj_1);
console.log("from Method =>",arr_11);

//join
//Def: This method joins all the elements of an array into a string using a specified separator. It takes one optional argument: the seperator to use.
//array into the string
const arr_12 = ['Apple', 'banana', 'cherry'];
const str = arr_12.join(', ');
console.log("join method =>",str)

//copyWithin
//Def: Method shallow copies part of an array to another location in the same array and returns the modified array without modifying is length.Syntax.copyWithin(target, start,end)
let numbers_1 = [1,2,3,4,5,6];
numbers_1.copyWithin(3,0,3)//(three elements to copy , from the index 0, to the index 3)
console.log("copyWithin Method =>",numbers_1)

//push
//Def: This method adds one or more elements to the end of an array and returns the new length of the array.
let fruits_2 = ['apple', 'banana']
fruits_2.push('cherry', 'orange');
console.log('psuh method =>',fruits_2)

//pop
//Def: removes the last elements from the array (removes only one element)
fruits_2.pop()
console.log("pop method => ", fruits_2)
//Question : If we want to remove more than one how it can be done? 
// idea: can we use the filter method?

/*
Note: 
1. for removing the elements the required methods are "POP" & "SHIFT"
    POP removes the last element from the array. 
    SHIFT removes the first elemetn from the array.
2. for adding the elements the required methods are "PUSH" & "UNSHIFT"
    PUSH adds the element to tha last index to the array.
    UNSHIFT adds the element to the first to the array.
*/
