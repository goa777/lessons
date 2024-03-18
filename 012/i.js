function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function middle(a, b, c) {
 return (a + b + c) - Math.min(a, b, c) - Math.min(a, b, c);
}

let a = rand(0, 25);
let b = rand(0, 25);
let c = rand(0, 25);

console.log(a, b, c);

let middleResults = middle(a, b, c);
console.log(middleResults);

console.clear();


// atspausdinti 10 random reiksmiu nuo 0 iki 25

let aa = rand(0, 25);
let bb = rand(0, 25);
let cc = rand(0, 25);


for (let i = 0; i < 10; i++) {
    console.log(rand(0, 25));
}