//https://www.youtube.com/watch?v=uJ-TDU189C4&t=14s
//Infosys interview Questions.
console.log(1 + "2" + "2"); //concatinating here.
console.log(1 + +"2" + "2"); // +"2" is a number.
console.log(1 + -"2");
console.log(1 + -"2" + "2"); // -12
console.log(+"1" + "1" + "2")//concat
console.log("A" - "B" + "3"); //NaN concats with string gives NaN3
console.log(typeof(NaN));
console.log(typeof({a:1}));
console.log("A" - "B" + 2); //NaN with any number is NaN only.

for(let i = 0; i < 5 ; i++){
    console.log("value is => ",i++)
}

