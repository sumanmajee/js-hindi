const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["flash","batman","superman"]

// marvel_heros.push(dc_heros)

const allHeros = marvel_heros.concat(dc_heros)

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const new_arr = arr.flat(Infinity)

console.log(new_arr);

console.log(Array.from("suman"));