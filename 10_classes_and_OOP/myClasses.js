// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUser());

// Behind the scene

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUser = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail.com","123")

console.log(tea.encryptPassword());
console.log(tea.changeUser());