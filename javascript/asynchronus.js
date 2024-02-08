/*
In JavaScript, asynchronous programming allows you to execute code without blocking the main execution thread, 
which is crucial for handling tasks such as network requests, file I/O operations, timers, and event handling.
Asynchronous operations are typically managed using callback functions, promises, or async/await syntax.
*/

//Method1. 
/**
 * Callback Functions:

Callback functions are a traditional way to handle asynchronous operations in JavaScript. 
You pass a function as an argument to another function, and that function is called once the asynchronous task completes.
 */
function fetchData(url, callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(data);
    }, 1000); // Simulate delay of 1 second
}

function processData(data) {
    console.log('Received data:', data);
}

fetchData('https://example.com/api/data', processData);
