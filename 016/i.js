function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const o = {vardas: 'Jonas', amzius:'22', miestas: 'Vilnius'}; /*objektai*/

const a1 = ['Jonas', 22, 'Vilnius'];  /*masyvai*/

console.log('o', o);
console.log('a1', a1);

const animals = ['Kiškis', 'Lapė', 'Barsukas', 'Vilkas', 'Laukinis katinas'];


//    const peoples = [
//      {vardas: 'Jonas', amzius: 22, miestas: 'Vilnius'},
//      {vardas: 'Petras', amzius: 33, miestas: 'Kaunas'},
//      {vardas: 'Antanas', amzius: 44, miestas: 'Klaipėda'}
//    ];





console.log(animals[1]);

// animals[5] = 'Lūšis';
animals.push('Lūšis');


animals[3] = 'Šuo';

// animals[10] = 'Zuikis';

console.log(animals.length);   /* ats. bus 6, nes pirmas aukstas yra 0 (pagal britiska skaiciavima) */

console.log(animals);



//(((1. atspauzdinti kiekviena gyvuna atskiroje eiluteje (viska ideti i cikla ir viska... ) ))
//1. Atspausti visus animals masyvo elementus

for (let i = 0; i <animals.length; i++) {
    console.log(animals[i]);
}

// i yra indeksas- auksto numeris

console.clear();
// 2. Atspausti porinių indeksų animals masyvo elementus

for (let i = 0; i <animals.length; i = i + 2) {
       console.log(animals[i]);
   }


   console.clear();

    
   // 3.Atspausti gyvūnus, kurių pavadinimas ilgesnis nei 6 raidės iš animals masyvo


   for (let i = 0; i < animals.length; i++) {
        if (animals[i].length > 6) {
    console.log(animals[1]);
}
   }

   //  animals[i].lenght > 6 && console.log(animals[i]);


// 4. Sukurti masyvą su 5 atsitiktiniais skaičiais nuo 1 iki 10

const numbers = [];
for (let i = 0; i < 5; i ++) {
    numbers.push(rand(1, 10));
}


console.clear();
console.log(numbers);

// 5. suskaičiuoti penketus


let penketukai = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
        penketukai++;
    }
}

console.log('penketukai:', penketukai);


console.clear();

let rez;

rez = animals.push('zuikis');
// console.log(rez, 'zuikis push');
rez = animals.unshift('briedis');
// console.log(rez, 'briedis unshift');

animals.push('Zuikis');   //ideda i gala

animals.unshift('Briedis'); //ideda i prieki

animals.unshift('keleivinis lektuvas', 'kregzde', 'bebras');

animals.push('lakstingala', 'tigras', 'pelekas');

console.log(animals);

console.log(rez, 'pop');   //grazina tai ka ismetem
/*
animals.pop(); //trina paskutini masyvo elementa (galima tik 1 istrinti)
animals.pop();
*/

animals.shift();
console.log(rez, 'shiftp');   //istrina is priekio

console.log(animals);

animals.splice(2, 3); //2 is  index , 3 is how many elements to remove

console.log(rez, 'splice');

console.log(animals);



rez = animals.splice(4, 0, 'dog', 'cat', 'mouse');

console.log(rez, 'splice');

console.log(animals);

let dogIndex = animals.indexOf('dog');  // rodo kurioje vietoje yra dog
animals.splice(dogIndex, 1);

console.log(animals);