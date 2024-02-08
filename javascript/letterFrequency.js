const letterFrequency = (phrase) =>{
    let frequency = {}
    //we need to loop it
    for(const letter of phrase){
        //check the letter in frequency Object
        if(letter in frequency){
            frequency[letter] += 1
        } else {
            frequency[letter] = 1
        }
    }
    return frequency;
}

const phrase = 'Hi This is Dayanand Kumar Kasagala';
console.log(letterFrequency(phrase))

//How to move the strings into an array?