
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





/*9.	Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;

    A.	Ciklo viduje paleiskite dar vieną ciklą 
          kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas.
          Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
          Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

    B.	Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;

    C.	Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės; 
*/

/*9.

let vidinis;
do {
    vidinis = rand(5, 10);
    console.log('Vidinis:', vidinis);
} while (vidinis != 5);
*/

//A.

let vidinis;
let kartaiDidelis = 0;
let kartaiMazas = 0;

do {
    kartaiDidelis++;
    vidinis = rand(5, 10);
   console.log('Vidinis:', vidinis);

    for (let i = 0; i < vidinis; i++) {
        kartaiMazas++;
        console.log('A');
    }
} while (vidinis != 5);

console.log('Kartai didelis:', kartaiDidelis);
console.log('Kartai mazas:', kartaiMazas);

//B.


