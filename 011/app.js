console.log ('Welcome to the cycle world! 🚴‍♂️🚴‍♂️🚴‍♂️');

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for (let i = 1; i < 5; i++) {
    console.log(i);
}
console.clear();

let word = 'hello mr. racoon! 🚴‍♂️';

/*for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}*/


/*for (let i = 0; i < word.length; i+=2) {
    console.log(word[i]);
}
*/

for (let i = 0; i < word.length; i+=2) {
    console.log(word[i] + (word[i+1] !== undefined ? word[i+1] : ''));
}

//reverse

console.clear()

for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}

console.clear()


console.log('%c RACOON ', 'color: skyblue; background-color: crimson; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold; text-align: center; text-shadow: 2px 2px 2px black;');

//odd letters in red, even letters in blue

for (let i = 0; i < word.length; i++) {
  if (i % 2 === 0) {
    console.log('%c' + word[i], 'color: skyblue');
  } else {
    console.log('%c' + word[i], 'color: crimson');
  }
}
