const user = {
    username: "suman",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "suman"
//     console.log(this.username); // this can't be used in function
// }

// chai()

const chai = () => {
    let username = "suman"
    console.log(this.username);
}

// chai()

// const addOne = (num1,num2) => (num1 + num2) //implicit return
// const addOne = (num1,num2) => num1 + num2 

const obj = () => ({username: "suman"})
console.log(obj());