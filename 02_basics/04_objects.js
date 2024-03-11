// const tinderUser = new Object() // singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "suman",
            lastName: "majee"
        }
    }
}

// console.log(regularUser.fullName?.userFullName);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "suman"
}

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseIntructor);
console.log(instructor);

// {
//     "courseName": "js in hindi",
//     "price": "free",
//     "courseInstructor": "suman"
// }