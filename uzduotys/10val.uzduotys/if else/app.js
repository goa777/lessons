function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//  1.

let a = rand(1, 6);
let b = rand(1, 6);
console.log (a + b);


let sum = a + b;
