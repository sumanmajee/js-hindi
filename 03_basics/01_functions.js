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

// console.log(login());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "suman",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:300
})

