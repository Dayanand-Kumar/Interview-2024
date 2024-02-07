//Uses
//1.create array copy using spread
//understand how the spread operator effortlessly creates shallow copies of arrays.
const originalArray = [1,2,3, [5,6, [7,8]]];
const copiedArray = [...originalArray];
console.log("Array copy (Shallow copy)",copiedArray)

//2.Merging Arrays using spread operator
//Explore the spread operator simplifies the merging of arrays.
const array1 = [1,2,3];
const array2 = [4,5,6];
const mergedArray = [...array1, ...array2]
console.log("Merging Array  => ",mergedArray);

//3.Spreading Objects: cloning and extending
//Not just arrays, you can spread objects as well using spread operator in javascript.
const originalObject_1 = {key1: 'value1', key2 : 'value2'}
const clonedObject = {...originalObject_1}
console.log("Cloning and Spreading => ", clonedObject);

//Merging Objects in spread operator.
const object1 = {name : 'John'};
const object2 = {age : 30};
const mergedObject = { ...object1, ...object2}
console.log("Merging Objects =>", mergedObject);

//Spreading function arguments
function sum(...data){
    return data.reduce((total, number) => total + number, 0)
}
const result = sum(1,2,3,4,5)
console.log("passing spread in function arguments =>", result)