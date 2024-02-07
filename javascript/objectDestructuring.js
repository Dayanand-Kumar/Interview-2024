//Extract properties in Object Destructuring.
const person = {name : 'Alice', age : 25, city : 'Wonderland'};
const {name , age} = person;
console.log("get data through Object destructuring =>",name,age);

//Default values in Object Destructuring.
const settings = {fontSize : 16, theme : 'light'};
const {fontSize, theme, language = 'en'} = settings;
console.log("pulling the values from the object => ", language);

//Extracting Properties from Nested Objects.
const company = {name1 : 'TechCo', info: { employees : 100, location : 'Silicon Valley'}};
const {name1, info: {employees, location}} = company;
console.log("pulling values from nested objects => ", name1, employees, location);

//Renaming properties in Destructuring.
const book = {title : 'Web Dev', author : 'Farooq dad'};
const {title : bookTitle, author: bookAuthor} = book;
console.log("Renaming properties through Destructuring => ",bookTitle, bookAuthor);

//Rest parameter in Object Destructuring.
const userDetails = {username : 'jsCoder', email: 'angularexpertdayanand@gmail.com', age : 38};
const {username , ...otherDetails} = userDetails;
console.log("Rest parameter is involved in the destructuring => ",username, otherDetails)

//Object Destructuring in the function parameters
const personData = {firstName : 'Dayanand', lastName : 'Kumar', country : 'USA'};
function displayFullName({firstName, lastName}){
    console.log("destructuring in the function parametes => ", `${firstName} ${lastName}`);
}
displayFullName(personData)

//Combining object and Array Destructuring
const complexData = {name2:'Jane', details:{age2 : 35, hobbies:['painting', 'gardening']}};
const {name2, details : {age2, hobbies}} = complexData;
console.log("destructuring in Array => ",name2, age2, hobbies);
