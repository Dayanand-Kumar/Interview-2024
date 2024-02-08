const add = function(a,b){
    return a+b;
}
const subtract = function(a, b){
    return a - b;
}
const multiplication = function(a,b){
    return a*b;
}
const calculate = function(operation, a, b){
    return operation(a,b)
}
console.log('SUM => ',calculate(add, 10,20))
console.log("subtract => ", calculate(subtract, 20, 10))

//built in higher order functions.
//1.map
const numbers = [1,2,3,4,5,6];
const doubled = numbers.map((num) => num *2);
console.log("Doubled Numbers => ", doubled)