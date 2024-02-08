const items = [19,5,4,7,9,32,9,12,4]
const findMax = (numbers) => {
    let result = numbers[0]
    for(const number of numbers){
        if(number > result){
            result = number
        }
    }
    return result;
}

console.log(findMax(items))