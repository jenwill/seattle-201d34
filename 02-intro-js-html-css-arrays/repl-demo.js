'use strict';

// DATA TYPES
// Strings, Numbers, Booleans

// ARRAYS
// stores multiple, similar elements
// don't mix data types!
// ordered, so we can access elements by index/position
// index starts at 0

// don't do this!
var myArray = ['string', 9, true, [], {}];

// keep the data types the same
var arrayOfDogs = ['Gary', 'Charlotte', 'Neville'];


// PUSH method
// adds a single element to the end of an array
console.log('before push', arrayOfDogs.length);
console.log(arrayOfDogs.push('Jane'));
console.log('after push', arrayOfDogs.length);
console.log('entire array after push', arrayOfDogs);

// UNSHIFT method
// adds a single element to the beginning of an array
console.log('before unshift', arrayOfDogs.length);
console.log(arrayOfDogs.unshift('Lily'));
console.log('after unshift', arrayOfDogs.length);
console.log('entire array after unshift', arrayOfDogs);

// POP method
// removes a single element from the end of an array and returns that element
console.log('before pop', arrayOfDogs.length);
console.log(arrayOfDogs.pop());
console.log('after pop', arrayOfDogs.length);
console.log('entire array after pop', arrayOfDogs);

// SHIFT method
// removes a single element from the beginning of an array and returns that element
console.log('before shift', arrayOfDogs.length);
console.log(arrayOfDogs.shift());
console.log('after shift', arrayOfDogs.length);
console.log('entire array after shift', arrayOfDogs);
