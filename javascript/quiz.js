//snip 1
const arr_test = [6,4,2,9,7];
const [a,b] = arr_test;
console.log("Snip 1 =>", a,b);

//snip 2
let x = () => {
    return {y: "z"};
};
console.log("Snip 2 => ", typeof x().y);
//Explanation : the string "z" is assigned to y, y is there with in the function of x  ! so x -> y - > z (z is a string)

//Snip3
let a_1 = [1,2,3,4,5];
let index = a_1.indexOf(3); //the index of 3 is 2.
console.log("Snip 3 =>",a_1[index]); //the value of that index is 3.

//snip 4
let x_1 = ""; // this is empty
console.log("snip 4 =>",x_1 == undefined) //empty should not be equal to undefined

