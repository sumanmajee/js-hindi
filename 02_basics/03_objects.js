// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "suman",
    "full name": "suman majee",
    [mySym]: "mykey1",  //correct syntax, wrong symtax=> mySym: "mykey1"
    age: 18,
    location: "jaipur",
    email: "suman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]); 

// Object.freeze(JsUser) // no further changes can be made in JsUser

JsUser.greetings = function(){
    console.log("greetings JS user");
}
JsUser.greetingsTwo = function(){
    console.log(`greetings JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());