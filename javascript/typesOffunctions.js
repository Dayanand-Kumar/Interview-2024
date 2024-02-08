//Types of functions.
//1.Named Function Declarations:
function add(a, b) {
    return a + b;
}

//2.Function expressions
const subtract = function(a, b) {
    return a - b;
};

//Anonyumous function expressions
const multiply = function(a, b) {
    return a * b;
};

//4.Arrow Functions (ES6 features)
const divide = (a, b) => {
    return a / b;
};

//5.Immidiate invoked functions (IIFE)
(function() {
    console.log("I'm immediately invoked!");
})();

//6.Generator functions
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

//7. Constructor functions
function Person(name) {
    this.name = name;
}
const person1 = new Person('Alice');

//8.Methods
const person = {
    name: 'Bob',
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
person.greet();

//8.Higher order functions
function greet(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}
const greetJohn = greet('John');
greetJohn();

//9.callback functions 
function fetchData(url, callback) {
    // Fetch data from the URL
    // Once data is fetched, invoke the callback with the data
    callback(data);
}

//10.Recursive functions
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

