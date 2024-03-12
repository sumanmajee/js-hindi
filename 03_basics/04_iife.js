// immediately invoked function expression
// to remove pollution by global scope variables 

(function chai(){
    console.log(`DB CONNECTED`);
})();
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('suman');