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

