'use strict';

function multiplyAndAdd(a, b) {
  var mult = a * b;
  var sum = a + b;
  return [mult, sum];
  // return [(a + b), (a * b)];
}

// multiplyAndAdd(6, 10);


// SCOPE

// var dog = 'Gary';
function variableScope() {
  var dog = 'Charlotte';
  // console.log('Line 18', dog);
  return dog;
}

variableScope();


function secondScope(dogParam) {
  
  console.log('inside', dogParam);
}

// console.log(dogParam);

secondScope('Gary');