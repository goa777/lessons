console.log('hello, how are you?');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

1.

let one = rand(0, 4);
let two = rand(0, 4);

console.log(one, two);

let result;


if (one > two) {
    let result = one / two;
} else {
    let result = two / one;
}


console.log (result);

console.clear();





2.

let A = rand(0, 25);
let B = rand(0, 25);
let C = rand(0, 25);

console.log(A, B, C);
console.log (result);

if (A < B && A > C || A > B && A < C);
else if (B  < A && B > C || B > A && B < C);
else if (A === B || A === C || B === C);
else if (A === B && A === C && B === C);
else echo ();

console.clear();


3.

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);
console.log (result);

if (a + b > c && a + c > b && b + c > a);
else echo ();

console.clear();


4.

let vienas = rand(0, 2);
let du = rand(0, 2);
let trys = rand(0, 2);
let keturi = rand(0, 2);

