// FOR LOOP
// perform an action a specific number of times
// OR iterate over an array (or string) and perform a certain action a specific number of times

// for(start; condition to stop; increment){
//   code to execute;
// }

// do something a certain number of times
var index = 0;
for(var index = 0; index < 10; index +=3) {
  console.log('index is ' + index);
  console.log('I am in a for loop!');
}

// iterate over an array 
var favoriteFoods = ['pizza', 'sushi', 'pasta', 'cookies', 'pierogies'];

// var foodGuess = prompt('Can you guess one of my favorite foods?').toLowerCase();

for(var i = 0; i < favoriteFoods.length; i++) {
  // compare the user's guess to the elements in the array 
  if(foodGuess === favoriteFoods[i]) {
    alert('Correct!');
    break;
  } else {
    console.log('Nope!');
  }
}

// WHILE LOOP
// set a condition that needs to be met 
// might run...
// will never run if the condition is never met

// while(condition is true) {
//   code to execute;
// }

var counter = 0;
var flag = false;

while ((counter < 3) && (flag === false)) {
  console.log('The counter is', counter);
  counter++;
  // if the user guess correctly {
  //   flag = true;
  // }
}

while(flag === false) {
  console.log('Flag', flag);
  flag = true;
}

// BE CAREFUL ABOUT INFINITE LOOPS! Always set up a condition to stop the loop
// This will run forever...
// while(counter < 3 ) {
//   console.log('I am infinite');
// }

// DO WHILE LOOP
// always runs at least once, then condition is evaluated

// do {
//   code to execute;
// } while (condition to evaluate)

var numFlag = false;
var faveNum = 2;
var faveNumTries = 5;
var numGuess;

do {
  // evaluate user input and decide if the flag should be set to true
  numGuess = parseInt(prompt('Can you guess my favorite number?'));
  faveNumTries--;
  if (numGuess === faveNum || faveNumTries === 0) {
    numFlag = true;
  }

} while (numFlag === false);