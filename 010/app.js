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

console.log(Math.min(45, 3, 5, 7, -9, 0, 1, 2, 3, 4, 5, 6, 12));
console.log(Math.max(45, 3, 5, 7, -9, 0, 1, 2, 3, 4, 5, 6, 12));

console.log(Math.abs(-45));

console.log(Math.random());



console.clear();



let str = 'Barsukas';

console.log(str.length);

console.log(str[0]);
console.log(str[0] + str[1]);




let fairytail = 'once upon a time, in a faraway forest...';

console.log(fairytail. includes('forest'));
console.log(fairytail. includes('up on'));
console.log(fairytail. includes('upon'));
console.log(fairytail. indexOf('upon'));
console.log(fairytail. indexOf('bla'));
console.log(fairytail. indexOf('once'));

let shortString = 'abc';
console.log(shortString.padEnd(1005, '*'));

console.clear();


let shortFairytail = fairytail.slice(5, 10);

console.log(shortFairytail);

let lowerCaseFairytail = fairytail.toUpperCase();

console.log(lowerCaseFairytail);

console.log('ABC'.charCodeAt(2));
console.log('aaa'> 'aa');


