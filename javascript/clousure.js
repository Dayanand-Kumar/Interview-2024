//Ref : https://www.youtube.com/watch?v=qikxEIxsXco
//Def: clousure is a function bundled together its lexical environment.
//function along with its lexical scope forms a clousure.
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();
/*
    Uses of clousure:
    1. Module design pattern
     2.Currying 
    3.Functions like one
    4.memoize
    5. maintaining state in async world
    6. setTimeouts
    7. Iterators
    ...and many more.
*/

//Example 2
function z(){
    var b = 900;
    function y(){
        var a = 7;
        function x(){
            console.log(a, b)
        }
        x();
    }
    y();
}
z();