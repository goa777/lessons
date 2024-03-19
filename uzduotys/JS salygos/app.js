console.log('hello, how are you?');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*1. Naudokite funkcija rand(). Sukurkite du kintamuosius ir 
naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą naudodami console.log()*/

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





/*2. Naudokite funkcija rand(). Sukurkite tris kintamuosius ir 
naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.*/

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


/*3. Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite rand() funkcija nuo 1 iki 10). 
Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir
 atsakymą atspausdintų naudojant console.log(). */


let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);

let arGaunasi = a + b > c && a + c > b && b + c > a;
console.log(arGaunasi ? 'Gaunasi' : 'Negaunasi');


let arGaunasi2 = (a + b + c) / Math.max(a, b, c) < 2;
console.log(arGaunasi ? 'Gaunasi' : 'Negaunasi');





/*4. Sukurkite keturis kintamuosius ir rand() funkcija sugeneruokite jiems 
reikšmes nuo 0 iki 2.
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
Rezultatus atspauzdinkite su console.log()
*/

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



/*5. Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10.
Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  
didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, 
o prie 0 “*” simbolius
*/








/*6. Įmonė parduoda žvakes po 1 EUR. 
Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 
Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą
 su console.log() kiek žvakių ir kokia kaina perkama. 
Žvakių kiekį generuokite rand() funkcija nuo 5 iki 3000. */






/*7. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100.
Paskaičiuokite jų aritmetinį vidurkį. 
Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. 
Abu vidurkius atspausdinkite su console.log()*/