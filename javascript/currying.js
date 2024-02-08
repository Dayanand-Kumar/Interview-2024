//Currying in javascript
//we can do the currying in two different ways (using bind method, using clousures)
/*
Currying is a technique used in functional programming to transform a function with multiple arguments into a sequence of nested functions, each taking a single argument.
*/
//Example 1: without currying:
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(5,10,15));

//Example 2: Applying currying technique
function addData(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log("Currying Technique => ",addData(5)(10)(15))

//uses : Code Reusability and Composability: