function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



/* 1. */

let lap = 10;


for (lap = 10; lap >= 1; lap--) {
  console.log(lap);
}


/* 2. */


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


/* 3. */

function getRandomFuel(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const totalLaps = 10;
const initialFuel = 44; 
const minFuel = 3; 
const maxFuel = 6;

let fuelLeft = initialFuel;
let lapsCompleted = 0;