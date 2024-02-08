//This keyword
function displayName(){
    console.log(this.name)
}

let obj1 = {
    name : 'Dayanand',
    displayName : displayName
}
let obj2 = {
    name : 'Kasagala',
    displayName : displayName
}
obj1.displayName();
obj2.displayName();