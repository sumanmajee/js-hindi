const user = {
    username: "suman",
    loginCount: 8,
    signedIn: true,

    getUserDetails : function(){
        console.log("got user details");
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = new User("suman",4,true)
const userTwo = new User("Chai",10,false)
console.log(userTwo);

// First new keyword creates a new instance
// Then it creates a constructor and it packs all the arguments inside new keyword
// Then new keyword then returns all this data