const d = new Date(); //variable for each new day's date
const weekday = new Array(7); //store 7 values in Array
//set array values
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const date2 = new Date();
const weekday2 = new Array(7);
weekday2[0] = "Time to chillax!";
weekday2[1] = "Monday morning blues!";
weekday2[2] = "Taco Time!";
weekday2[3] = "Two more days to the weekend!";
weekday2[4] = "The weekend is almost here!";
weekday2[5] = "The weekend is here!";
weekday2[6] = "Time to party!";

const n = weekday[d.getDay()];
const n2 = weekday2[date2.getDay()];

const displayWeekday = document.getElementById('weekday');
const phrase = document.getElementById('phrase');

whatDayIsIt();

function whatDayIsIt() {
  displayWeekday.innerText = n; //input current day of week
  phrase.innerText = n2; //input phrase
}
