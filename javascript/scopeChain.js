//scopechain
var name = "Dayanand";
function displayName(){
    console.log(name);
}
displayName();

//blockscope / function scope
//example for function scope.
function displayName(){
    var userName = "function scope example";

}
displayName();
// console.log(userName)
//Note:throws error due to a variable which is declared inside the function is not accessable to outside.

//example for blockscope
//a. it works fine.
if(true){
    var customerName = "block scope example";
}
console.log(customerName)

//b. it won't work
if(true){
    let customerName_1 = "block scope example";
}
// console.log(customerName_1)
//Note: var is a function scope. If we declare function scope inside the block we can access that variable.
// The block scope variable (let/const) is not accessable outside of the block.

//another example:
for(var i = 0; i<5 ; i++){
    // console.log(i) //gives output as 0 1 2 3 4 
}
// console.log(i) //prints 5 as a output. 

//working with let.
for(let j = 0; j < 5 ; j++){
    // console.log("working with let => ", j) //gives output as 0 1 2 3 4 
}
// console.log("working with Let => ", j) // gives the reference error beacuse we are trying to access the variable to the outside of the program.


