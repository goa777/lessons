function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



for (let i = 0; i < 10; i++) {

    console.log(i);
   
    if (i == 5){ 

    break;                  //sustabdo cilka
    }
}
console.clear();

//jei reikia ismesti 10 k. ir sustoti ties 2

for (let i = 1; i < 10; i++) {

    let random = rand(0, 7);

    console.log('metimas:', i, 'rezultatas:', random);
   
    if (random == 2){ 

    break;                  
    }
}
console.clear();


/*
let count = 0;
let number = 0;

do {
    number = rand(0, 7);
    count++;
    console.log('metimas:', count, 'rezultatas:', number);
} while (count == 10 || number == 2);

*/


let count = 0;
let number = 0;

do {
    number = rand(0, 7);
    count++;
    console.log('metimas:', count, 'rezultatas:', number);

//    if (number == 7) {
//    break;
//    }


}    while (count != 10 && number != 2 && number != 7);

console.clear();


for (let i = 1; i < 10; i++) {

    let random = rand(0, 7);

    console.log('metimas:', i, 'rezultatas:', random);
   
    if (random == 2){ 
    continue;                  
    }
    console.log('Imame');
}