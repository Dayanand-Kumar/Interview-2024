//1. nop error
var age = 23;
console.log(age);

//2.Error ReferenceError: age1 is not defined
// console.log(age1);

//3.How many times it is hoisted?
var name = 'Dayanand';
var name = 'Kasagla';
//It will hoisted only once.
 
//overriding.
sayHello();
function sayHello(){
    console.log("Hello");
}

function sayHello(){
    console.log("Hi")
}

//function expression
var sayHello = function(){
    console.log("Hello");
}
sayHello();
//shows error due to hoisted
// sayHello();
// var sayHello = function(){
//     console.log("Hello");
// }

var name_1 = 'Dayanand';
function changeName(){
    console.log("Name =>", name_1)
    var name_1 = "Kasagala";
    console.log("Changed Name => ", name_1)
}
changeName();

//if we declare the let and const
console.log(name_2); //It gives name_2 is not defined due to temporal dead zone.
let var_2 = "Hello Dayanand"



