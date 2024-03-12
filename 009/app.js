console.log ('Hello from app.js!');



// OR ||
console.log('true || true:', true || true);
console.log('true || false:', true || false);
console.log('false || true:', false || true);
console.log('false || false:', false || false);


// AND &&
console.log('true && true:', true && true);
console.log('true && false:', true && false);
console.log('false && true:', false && true);
console.log('false && false:', false && false);


// NOT !
console.log('!true:', !true);
console.log('!false:', !false);
console.log('!!true:', !!true);
console.log('!!false:', !!false);


// NOT with numbers and strings
console.log('!0:', !0);
console.log('!1:', !1);
console.log('!187:', !187);
console.log('!!-187:', !!-187);
console.log("!'':", !'');
console.log("!'hello':", !'hello');
console.log("!!' ':", !!' ');


// undefined type
console.log('!undefined:', !undefined);


// OR AND with numbers
console.log('25 || 36:', 25 || 36);
console.log('25 && 36:', 25 && 36);
console.log('0 || 36:', 0 || 36);
console.log('0 && 36:', 0 && 36);

// OR AND with strings
console.log("'hello' || 'world':", 'hello' || 'world');
console.log("'hello' && 'world':", 'hello' && 'world');
console.log("'' || 'world':", '' || 'world');
console.log("'' && 'world':", '' && 'world');




console.clear();




let a = 0;
a || console.log('a is 0');
a && console.log('a is not 0');

let b = 1 + 2;
let c = 1 + 2 * 3;
let d = (1 + 2) * 3;

console.log('b:', b);
console.log('c:', c);
console.log('d:', d);

let e = 9 % 7;
console.log('e:', e);

// let f = 2 ** 3;
// console.log('f:', f);

let g = 7;
let h = 3;

g++;
h--;

console.log('g:', g);
console.log('h:', h);


let i = 27;
console.log('i:', ++i);
console.log('i:', i);

let j = 2;

let result = ++j * ++j; // 3 * 4
result = j++ * ++j; // 4 * 6

console.log('result:', result);

let x = 1;

--x || console.log('LOGGED');

console.clear();

console.log('1 < 2:', 1 < 2);
console.log('1 > 2:', 1 > 2);
console.log('1 <= 2:', 1 <= 2);
console.log('1 >= 2:', 1 >= 2);

console.log('1 < 1:', 1 < 1);
console.log('1 > 1:', 1 > 1);
console.log('1 <= 1:', 1 <= 1);
console.log('1 >= 1:', 1 >= 1);

console.log('1 == 1:', 1 == 1);
console.log('1 == 2:', 1 == 2);
console.log('1 != 2:', 1 != 2);
console.log('1 != 1:', 1 != 1);


console.log("'1' == 1:", '1' == 1);
console.log("'1' === 1:", '1' === 1);
console.log('true == 1', true == 1); // true is 1
console.log('true === 1', true === 1);
console.log('NaN == NaN:', NaN == NaN);
let m = 1;
m++;
console.log('m:', m);
console.log('is NaN', isNaN(m));
console.log('true !== 1', true !== 1);
console.log('true != 1', true != 1);