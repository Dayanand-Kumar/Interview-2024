const wordFrequency = (words) =>{
    const splittedWords = words.split(' ')
    let frequency = {}
    for(const word of splittedWords){
        if(word in frequency){
            frequency[word] += 1
        }else {
            frequency[word] = 1
        }
    }
    return frequency;
}

const phrase = 'lol funny lol'
console.log(wordFrequency(phrase))

