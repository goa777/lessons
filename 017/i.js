

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*3.	Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės 
A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.*/

/* 4.	Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. 
Sudėkite masyvus, sudėdami atitinkamas reikšmes.
 Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) 
 reikšmių ir kiek unikalių kombinacijų gavote.*/


const vienas = [];
const du = [];
const trys = [];

for (let i = 0; i < 200; i++) {
    vienas.push(['A', 'B', 'C', 'D'][rand(0, 3)]);
    du.push(['A', 'B', 'C', 'D'][rand(0, 3)]);
    trys.push(['A', 'B', 'C', 'D'][rand(0, 3)]);

}

console.log(vienas, du, trys);

const bendras = [];

for (let i = 0; i < 200; i++) {
    bendras.push(vienas[i] + du[i] + trys[i]);
}

console.log(bendras);

const unikalios = [];

for (let i = 0; i < 200; i++) {
    if (-1 == unikalios.indexOf(bendras[i])){
        unikalios.push(bendras[i]);
    }
}
console.log(unikalios);




const unikaliosPo1 = [];

for (let i = 0; i < unikalios.length; i++) {

    const nuo = bendras.indexOf(unikalios[i]);
    if (-1 == bendras.indexOf(unikalios[i], nuo + 1)){
        unikaliosPo1.push(unikalios[i]);

}
}
console.log('unikaliosPo1', unikaliosPo1);

console.clear();


// 1. padaryti masyvą iš skaičių nuo 1 iki 100

const skaiciai = [];

for (let i = 0; i < 100; i++) {
 skaiciai.push(i + 1);
}

console.log(skaiciai);


// 2. Skaičius kurie dalinasi iš 3 pakeiskite į raidę "C"


for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 3 === 0) {
     skaiciai[i] = 'C';
    }
   }

   console.log(skaiciai);

   // 3. Skaičius kurie dalinasi iš 7 pakeiskite į raidę "B"

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 7 === 0) {
     skaiciai[i] = 'B';
    }
   }
   console.log(skaiciai);


// 4 Padauginti visus skaičius iš 5

for (let i = 0; i < skaiciai.length; i++) {
    if ('number' === typeof(skaiciai[i])) {   //typeof patikrina kokio daikdto yra numeris
        skaiciai[i] = skaiciai[i] * 5;
    }
}
console.log(skaiciai);

// 5 Pakeisti raides į jų indeksus

// i visada rodo skaiciu

for (let i = 0; i < skaiciai.length; i++) {
     if (typeof(skaiciai[i]) == 'string')  {
        skaiciai[i] = i;
     }
}

   console.log(skaiciai);

   // 6 Skaičius kurie dalijasi iš 3 bet nesidalina iš 5 pakeisti į "A"

   for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 3 === 0 && skaiciai[i] % 5 != 0 ) {
     skaiciai[i] = 'A';
    }
    }
   console.log(skaiciai);

// Suskaičiuoti skaičių sumą

let suma = 0;
for (let i = 0; i < skaiciai.length; i++) {
    if (typeof(skaiciai[i]) == 'number') {
        suma += skaiciai[i];
    }
    }
    
    console.log('suma', suma);
    console.log(skaiciai);

    let A = skaiciai.indexOf('A');
    let B = skaiciai.indexOf('B');
    A = skaiciai.lastIndexOf('A');


    const rev = skaiciai.reverse();


    console.log('A', A);
    console.log('B', B);

console.log(rev);





