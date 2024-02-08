/**
 * For reusing the methods we are applying the call, apply and bind method.
 */
let participant1 = {
    name : "Dayanand",
    battery : 70,
    chargeBattery : function(){
        this.battery = 100
    }
}
let participant2 = {
    name: "Samuel",
    battery : 30
}
// participant1.chargeBattery();
// console.log(participant1)

//call the chargeBattery method from participant1 and to apply that method to participant2
participant1.chargeBattery.call(participant2)
console.log("Call with out arguments =>",participant2) //working fine.

/*
    Use case 1: what if I don't need the charging of 100%, expecting some percentage.
    for this case we need to pass the parameters. 
    Here is the example given below.
    incase of call, call takes (object, list of parametes seperated by commas)

*/
let participant3 = {
    name : "Dayanand",
    battery : 70,
    chargeBattery : function(a, b){
        this.battery = this.battery + a + b;
    }
}
let participant4 = {
    name: "Samuel",
    battery : 10
}
participant3.chargeBattery.call(participant4, 20,30)
console.log("call with arguments =>",participant4)

/*
    Incase of apply, apply takes (object, array)
*/
let participant5 = {
    name : "Dayanand",
    battery : 70,
    chargeBattery : function(a, b){
        this.battery = this.battery + a + b;
    }
}
let participant6 = {
    name: "Samuel",
    battery : 10
}
participant5.chargeBattery.apply(participant6, [20,30])
console.log("Apply with arguments",participant6)

/*
    The bing method does not invokes the method, it returns the function. It can be invoked at a later point at any time.
*/
let participant7 = {
    name : "Dayanand",
    battery : 70,
    chargeBattery : function(a, b){
        this.battery = this.battery + a + b;
    }
}
let participant8 = {
    name: "Samuel",
    battery : 10
}
let rechargeBatteryOfParticipant8 = participant7.chargeBattery.bind(participant8,20,30);
rechargeBatteryOfParticipant8();
console.log("bind method => ",participant8);

