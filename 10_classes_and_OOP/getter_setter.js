class User {
    constructor(email,password){
        this.email = email
        this.password = password

    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const suman = new User("s@suman.ai","abc")
console.log(suman.password);
