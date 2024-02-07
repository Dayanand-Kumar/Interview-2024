//using SET
let chars = ['A', 'B', 'C', 'C', 'A', 'B', 'D'];
let uniqueChars = [...new Set(chars)];
console.log("using SET =>", uniqueChars);

//using FILTER + INDEXOF
let chars_1 = ['A', 'B', 'C', 'C', 'A', 'B', 'D'];
let uniqueChars_1 = chars_1.filter((c,index) => {
    // console.log("****", index)
    return chars_1.indexOf(c) === index;
});
console.log("using filter + indexof",uniqueChars_1);

//using Foreach + include
let chars_2 = ['D', 'A', 'B', 'C', 'C', 'A', 'B', 'D', 'D'];
let uniqueChars_2 = [] //we have created an empty array to check the elements.
chars_2.forEach((c) =>{
    if(!uniqueChars_2.includes(c)){
        uniqueChars_2.push(c)
    }
})
console.log("using Foreach + include =>", uniqueChars_2)

//using