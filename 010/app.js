console.log('hello, how are you?');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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


if (5 > 13) 
console.log('5 is greater than 3');
console.log('5 is greater than 3');

console.clear();




console.log(one, two);

if (one == 0 || two == 0) {
    result = 'cannot divide by zero';
}



else if (one > two) { 
    result = one / two;
}
else {
     result = two / one;
}

console.log (result);

console.clear();



console.log (Math.PI);

console.log(Math.round(45.78));
console.log(Math.round(45.49));


console.log(Math.floor(45.9));

console.log(Math.ceil(45.1));




