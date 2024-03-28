function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



/* 1.	
Vyksta automobilių žiedinės lenktynės. 
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
Suprogramuokite for ciklą, kuris imituotų 10 ratų 
automobilio važiavimą ir kiekviename cikle pateiktų
 (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti. 
 Paskutinis skaičius turėtų būti 1. 
 Visas rezultatas turėtų būti toks:  10 9 8 7 6 5 4 3 2 1 
 (skaičiai gali būti atspausdinti stulpeliu).*/


 for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.clear();

/* 2.	
Vyksta automobilių žiedinės lenktynės. 
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
Kiekvieną ratą automobilis važiuoja skirtingu nuo 120 iki 220 km/h greičiu. 
Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, 
rand() funkcija generuokite atsitiktinį automobilio greitį o 
visiems ciklams pasibaigus pateikite bendrą visų 10 ratų vidutinį greitį.*/


let totalSpeed = 0;

for (let i = 0; i < 10; i++) {
  const speed = rand(120, 220)
  console.log(speed);
  totalSpeed += speed;
}

const averageSpeed = totalSpeed / 10;

console.log('Average speed:', averageSpeed);

console.clear();


/* 3.	
Vyksta automobilių žiedinės lenktynės. 
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
Jo kuro bake liko 44 litrai kuro. 
Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro: nuo 3 iki 6 litrų. 
Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, 
o ciklams pasibaigus pateikite išvadą ar automobiliui užteko kuro įveikti visus 10 ratų.
 Kurui pasibaigus ciklą nutraukite anksčiau laiko. */


let fuel = 44;

for (let i = 0; i < 10; i++) {
  const usage = rand(3, 6);
  fuel -= usage;
  if (fuel <= 0) {
      break;
  }
  console.log( i + 1, usage);
}


if (fuel > 0) {
  console.log('Fuel left:', fuel);
} else {
  console.log('Out of fuel', fuel);
}

console.clear();


/* 4.	
Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų). 
Kiekviename žiede yra 5 posūkiai, kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h. 
Imituokite tokią situaciją dviem for ciklais (vienas 10 ratų, kitas 5 posūkiai) 
ir ciklams pasibaigus atspausdinkite mažiausią automobilio greitį kažkuriame iš posūkių.*/


let minSpeed = 121;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
      const speed = rand(20, 120);
      console.log(speed);
      if (speed < minSpeed) {
          minSpeed = speed;
      }
  }
}

console.log('Min speed:', minSpeed);

console.clear();





/* 5.	(BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 juose dalyvauja. 
Kiekviename kilometre gali atsitikti arba neatsitikti rand(0, 1) tokie trys įvykiai:
 netikėtai iššokti - neiišokti ant kelio kengūra, 
 vairuotojas gali nespėti - spėti pasukti vairą ir 
 vairuotojas gali nespėti - spėti paspausti stabdžius. 
 Imituokite tokią situaciją do while ciklu- vienas kilometras vienas ciklo prasisukimas. 
 Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę. 
 Jeigu viename cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra, 
 vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių while ciklą baikite.
  Ciklo pabaigoje atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.*/

let km = 0;
let kangaroo;
let steering;
let brakes;

do {
  kangaroo = !!rand(0, 1);
  steering = !!rand(0, 1);
  brakes = !!rand(0, 1);
  console.log(km, kangaroo, steering, brakes);
  km++;
} while (!kangaroo || steering || brakes);

console.clear();



/* 
// 1.

let lap = 10;


for (lap = 10; lap >= 1; lap--) {
  console.log(lap);
}


 // 2. 


function getRandomSpeed(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let totalSpeed = 0;

for (let lap = 1; lap <= 10; lap++) {
   let speed = getRandomSpeed(120, 220);
  totalSpeed += speed;
  console.log(`Lap ${lap}: ${speed} km/h`);
}


let averageSpeed = totalSpeed / 10;

console.log(`Total average speed of all 10 laps: ${averageSpeed.toFixed(2)} km/h`);

*/