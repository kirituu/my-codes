let speed = prompt(70);
const SPEED_LIMIT = 70;
const DEMERIT_POINTS_PER_5_OVER_LIMIT = 1;
const MAX_DEMERIT_POINTS = 12;

if (isNaN(speed) || speed < 0) {
  console.log(70);
} else {
  let overLimit = speed - SPEED_LIMIT;
  if (overLimit <= 0) {
    console.log("Ok");
  } else {
    let demeritPoints = Math.floor(overLimit / 5) * DEMERIT_POINTS_PER_5_OVER_LIMIT;
    console.log("Points: " + demeritPoints);
    if (demeritPoints > MAX_DEMERIT_POINTS) {
      console.log("License suspended");
    }
  }
}
