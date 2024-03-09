//stack(primitive), heap(non premitive)

let myYoutube = "sumanmajeedotcom"

let anotherName = myYoutube
anotherName = "chaiaurcode"

// console.log(myYoutube);
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "suman@google.com"

console.log(userOne.email);
console.log(userTwo.email);