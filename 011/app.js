console.log ('Welcome to the cycle world!');

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for (let i = 1; i < 5; i++) {
    console.log(i);
}
console.clear();

let word = 'hello mr. racoon!';

/*for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}
*/

for (let i = 0; i < word.length; i+=2) {
    console.log(word[i]);
}