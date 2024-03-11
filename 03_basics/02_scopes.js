let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "suman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()


console.log(addOne(5)); // addOne is a function can be accessed anywhere

function addOne(num){
    return num + 1
}

addTwo(5) // addTwo is a varible containing function hence can't be accessed before     declaration 

const addTwo = function(num){
    return num + 1
}

// global scope inside node and window is different