function myName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
    
}

// myName()

// function sum(num1,num2){
//     console.log(num1 + num2)
// }

function sum(num1,num2){
    return num1 + num2
}

const result = sum(3,4)
// console.log("result: ",result);

function login(username){
    if(username)
    return `${username} just logged in`
}

console.log(login());