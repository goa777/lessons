console.log('hello, how are you?');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*1.*/

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





/*2.*/

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


/*3 uzd.*/

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);
console.log (result);

if (a + b > c && a + c > b && b + c > a);
else echo ();

console.clear();


/*


let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);

let arGaunasi = a + b > c && a + c > b && b + c > a;
console.log(arGaunasi ? 'Gaunasi' : 'Negaunasi');


let arGaunasi2 = (a + b + c) / Math.max(a, b, c) < 2;
console.log(arGaunasi ? 'Gaunasi' : 'Negaunasi');

*/




/*4uz.*/

let A = rand(0, 2);
let B = rand(0, 2);
let C = rand(0, 2);
let D = rand(0, 2);

console.log(A, B, C, D);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (A == 2) {
    dvejetai++;
}
if (B == 2) {
    dvejetai++;
}
if (C == 2) {
    dvejetai++;
}
if (D == 2) {
    dvejetai++;
}

let suma = A + B + C + D;
vienetai = suma - dvejetai * 2;
nuliai = 4 - vienetai - dvejetai;

console.log('nuliu:', nuliai);
console.log('vienetu:', vienetai);
console.log('dvejetu:', dvejetai);
