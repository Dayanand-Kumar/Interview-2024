const items = [12, 13, 25]

//using Reduce Method.
const result = items.reduce((acc, next) => acc+next,0)
console.log(result)

//using ES6
const sumArray = (numbers) =>{
    let count = 0;
    for(const number of numbers){
        count += number
    }
    return count
}

console.log(sumArray(items))


