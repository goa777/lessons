console.log('Labas, mano mylimi uždaviniai!');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//sviesoforas

let sviesoforas = rand(0, 2);
let spalva = sviesoforas === 0 ? 'raudona' : sviesoforas === 1 ? 'geltona' : 'zalia';
 
console.log('Sviesoforas:', spalva);
 
if (spalva === 'raudona') {
    console.log('Stovime');
} else if (spalva === 'geltona') {
    console.log('Ruošiamės');
} else {
    console.log('Eik!');
}

switch (spalva) {
    case 'raudona':
        console.log('Stovime');
        break;
    case 'geltona':
        console.log('Ruošiamės');
        break;
    default:
        console.log('Eik!');
}


console.clear();




//pastomato dezuciu atsidarymas

let box = rand(1, 4);
let size;
if(box === 1) {
    size = 'S';
}
if(box === 2) {
    size = 'M';
}
if(box === 3) {
    size = 'L';
}
if(box === 4) {
    size = 'XL';
}

console.log('Box:', size);

if (size === 'S') {
    console.log('Tikriname S');
}
if (size === 'M' || size === 'S') {
    console.log('Tikriname M');
}
if (size === 'L' || size === 'M' || size === 'S') {
    console.log('Tikriname L');
}
if (size === 'XL'|| size === 'L' || size === 'M' || size === 'S') {
    console.log('Tikriname L');
}

console.clear();


switch (size) {
    case 'S':
        console.log('Tikriname S');
        case 'M':
        console.log('Tikriname M');
        case 'L':
        console.log('Tikriname L');
        case 'XL':
        console.log('Tikriname XL');
}

console.clear();

