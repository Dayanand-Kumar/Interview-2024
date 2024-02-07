//initial
let obj = {};
obj.name = "messi";
obj.year = "2024";
obj.speak = function(){
    return "My name is "+this.name+" and this is year"+this.year+"";
}

//copying an object.
let newObj = obj;
obj.year = 2023;
console.log("coping object =>",newObj.year);
console.log("new object has been created ! => ",newObj.speak());

//Shallow copy
//Def: You can create a shallow copy i,e a top level properties copy, using Objects.assign() method.
let copyObject = Object.assign({}, newObj);
copyObject.name = 'Ronaldo';
console.log("shallow copy =>", copyObject.speak());
console.log("copy check =>", newObj.speak());

//Deep copy
//Def: if you just need to copy only properties which are not functions - there is an efficient method. We are moving away from Object constructor here and using another global object in JS - JSON
let deepCopyObject = JSON.parse(JSON.stringify(obj));
console.log("Deep Copy Object =>",deepCopyObject);

//Object.create
//Def:Object.create() function this has additional flexibility that you can chooose what will be prototype of your new object.
let createObject = Object.create(obj);
console.log("Create Object method =>", createObject);
createObject.name = "Dayanand";
console.log("create object method calling =>",createObject.speak())


//Object.entries()
//this method returns an array of key-value pairs of object's enumerable properties.
let person = {name : "Roger", age: 30};
let entries = Object.entries(person);
console.log("collecting all the entries from an object =>",entries);

//Object.keys()
//Def: thisfunction picks only keys (or property lables) of objects and returns an array.
let keys = Object.keys(person);
console.log("collecting all the keys from an Object =>", keys); 

//Object.values()
//Def: This function picks only values of objects and returns array.
let values = Object.values(person);
console.log("collecting all the values from the Object =>", values);

//Object.freeze()
//Def: This function freezes the object for any further changes (key or values). it may not throw any error (unless you are in strict mode) but there willbe no effect of value change on your object.
let frozenObject = Object.freeze(person);
frozenObject.name = "Nadal";
console.log("frozen object is =>",frozenObject) 


//
console.log(obj.name,' ',obj.year)

const originalObject = {a:1, b:2};
const clonedObject = {...originalObject}
console.log("",clonedObject)