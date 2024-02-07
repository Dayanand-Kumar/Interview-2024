//Random passwords
const getRandomPassword = Math.random().toString(36).slice(2);
console.log("Random Passwords: ",getRandomPassword)

//checking the typeOf for the datatypes.
console.log("number =>", typeof(Number))
console.log("string =>", typeof(String))
console.log("object =>", typeof(object))
console.log("boolean =>", typeof(Boolean))
console.log("array =>", typeof(Array))
console.log("undefined =>", typeof(undefined))
console.log("null =>", typeof(null))
console.log("quotes =>", typeof(""))

console.log( Number === String)

//Extract domain name from the email.
let email = 'angularexpertdayanand@gmail.com'
let getDomain = email.substring(email.indexOf('@') + 1);
console.log("get the domain name from given email =>",getDomain);

