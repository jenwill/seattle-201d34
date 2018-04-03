'use strict';

// if(condition is met) {
//   run this code
// } otherwise {
//   run this code instead
// }

// var petGuess = parseInt(prompt('How many pets do you think I have?'));
var petGuess = prompt('How many pets do you think I have?');
petGuess = parseInt(petGuess);

if(petGuess === 2) {
  alert('That is correct!');
} else {
  alert('That is not correct!');
}

var ageGuess = prompt('Do you think I\'m older than 30? Please only answer with yes or no!').toLowerCase();

// yes, no, y, n, yeah, yep, nah, nope, Yes, YES, yEs, NO, maybe

if(ageGuess === 'yes') {
  alert('That is correct!');
} else if(ageGuess === 'no') {
  alert('That is not correct');
} else {
  alert('Please answer with yes or no');
}

'use strict';

// if(condition is met) {
//   run this code
// } otherwise {
//   run this code instead
// }

// var petGuess = parseInt(prompt('How many pets do you think I have?'));
var petGuess = prompt('How many pets do you think I have?');
petGuess = parseInt(petGuess);

if (petGuess === 2) {
  alert('That is correct!');
} else {
  alert('That is not correct!');
}

var ageGuess = prompt('Do you think I\'m older than 30? Please only answer with yes or no!').toLowerCase();

// yes, no, y, n, yeah, yep, nah, nope, Yes, YES, yEs, NO, maybe

if (ageGuess === 'yes') {
  alert('That is correct!');
} else if (ageGuess === 'no') {
  alert('That is not correct');
} else {
  alert('Please answer with yes or no');
}