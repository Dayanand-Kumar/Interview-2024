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

//8.


