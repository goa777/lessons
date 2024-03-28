function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('hello');





const m = [5, 15, 25];

const r = m.push(6);

console.log([...m]);


//1.    do:      prideda nauja elementa i masyvo gala
//2.    return:  grazina masyvo ilgi






const r2 = m.splice(2, 2);  

//1. do: istrina viena elementa is masyvo pagal nurodyta index
//2. return: istrintus elementus sudeda i nauja masyva ir grazina ji





const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 
console.log([...animals]);
 
const r3 = animals.slice(2, 3);

//1. do: nieko nekeicia
//2. return: nauja masyva, kuris yra ispjuatas is seno masyvo pagal nurodyta index ir ilgi


console.log(r3, animals);


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array2.concat(array1);

//1. do: nieko nekeicia
//2. return: nauja masyva, kuris yra sudarytas is dvieju masyvu

console.log(array1, array2, array3);


const array4 = [1, 2, 3, 4];

const r4 = array4.fill('A', 1, 3);

// r4[1] = 'B';

console.log(r4, array4);


//galima rasyti ir toki:

const m10 = Array(100).fill('A');
console.log(m10);

//1. do: pakeicia visus masyvo elementus i nurodyta reiksme
//2. return: grazina ta pati masyva




const elements = ['Fire', 'Air', 'Water'];

const r5 = elements.join('****');

console.log(r5, elements);



//1. do: nieko nekeicia
//2. return: string, kuris yra sudarytas is masyvo elementu, atskirtu nurodytu elementu


// darant atvirkstini: is string i element

const r6 = r5.split('****');

console.log(r5, r6);


const fairtTail = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.';

const r7 = fairtTail.split(' ');
console.log(r7, fairtTail);

console.clear();



//masyvas didelis

const md1 = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
 ]

console.table(md1);

console.log(md1[1][1]);

console.log(md1[2][2]);  //9 spauzdina
console.log(md1[2]);  // spauzdina 3 masyva (7,8,9) -pradeda skaiciuoti nuo 0 ir t.t.

// pvz reikia nurodyti x ir y kad rasti norima taska


//spauzdina viska i apacia po viena skaiciu

for (let i = 0; i < md1.length; i++) {
    for (let j = 0; j < md1[i].length; j++) {
        console.log(md1[1][j]);
    }
}


console.clear();




//uzdaviniai:


const animals2 = [
    ['ant', 'bison', 'camel'],
    ['duck', 'elephant', 'giraffe'],
    ['hippo', 'iguana']
];

// 1. išspausdinti visus gyvūnus


for (let i = 0; i < animals2.length; i++) {
    for (let j = 0; j < animals2[i].length; j++) {
        console.log(animals2[i][j]);
    }
}

console.clear();

// 2. duck pakeisti į dog   *******!!!????neveikia

for (let i = 0; i < animals2.length; i++) {
    for (let j = 0; j < animals2[i].length; j++) {
        if (animals2[i][j] == 'duck') {
            animals2[i][j] = 'dog';
        }
    }
}

console.clear();

console.table(animals2);

const newMD = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(i * 4 + j + 1);
    }
    newMD.push(row);
}

console.clear();

console.table(newMD);


console.clear();

// 3. Padaryti naują masyvą 5x4 kurio reikšmės yra atsitiktiniai dviženkliai skaičiai  

const newMD2 = [];

for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(rand(10, 99));
    }
    newMD2.push(row);
}

console.log(newMD2);



                             //**************/
//4. Surasti ir išspausdinti mažiausią skaičių


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const newMD3 = [];

for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(rand(10, 99));                                 // Pushing random two-digit numbers into the row
    }
    newMD3.push(row);                                           // Pushing the row into the 2D array
}

console.log(newMD3);

let min = newMD3[0][0];                              // Initialize smallestNumber with the first element of the array

for (let i = 0; i < newMD3.length; i++) {
    for (let j = 0; j < newMD3[i].length; j++) {
        if (newMD3[i][j] < min) {
            min = newMD3[i][j];                      // Update smallestNumber if a smaller number is found
        }
    }
}

console.log("The smallest number is:", min);











//  !!!!!!!!!!     issiaiskinti ka daro sita eilute (JEI TAU GERAI SEKASI VISKA CIA SUPRASTI :DDD )

const r10 = newMD2.flat();
console.log(r10);

const min1 = Math.min(...newMD2.flat());
console.log(min);


/*     You can use the 'Math.min' function along with the spread operator ('...') to find the minimum value in the flattened array.
  Galite naudoti funkciją Math.min kartu su sklaidos operatoriumi (...), kad surastumėte mažiausią reikšmę išlygintame masyve.*/
  
