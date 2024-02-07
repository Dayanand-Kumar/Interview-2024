/**
 * promises chain 
 * 1.getBread
 * 2.Add fillings
 * 3.serve the sandwich
 */

function getBread(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Got the bread!");
            resolve("Bread.");
        }, 1000)
    });
}

function addFillings(bread){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Added Fillings.');
            resolve(bread, '+ Fillings.');
        }, 2000);
    });
}

function serve(sandwich){
    return new Promise((resolve, reject) => {
        console.log("Sandwich is ready to eat.");
        resolve(sandwich);
    }, 3000)
}

getBread()
        .then(addFillings)
        .then(serve)
        .then(finalProduct => console.log(`Enjoy Your ${finalProduct}!`))
        .catch(error => console.log(`Something went wrong : ${error}`));