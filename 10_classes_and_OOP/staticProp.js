class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const suman = new User("suman")
console.log(suman.createId())