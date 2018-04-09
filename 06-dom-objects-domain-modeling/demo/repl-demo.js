// OBJECT LITERALS
// properties come in key-value pairs 
// values can be strings, booleans, arrays, etc
// keys are descriptive

// var myObjectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3
// }

var allie = {
  age: 34,
  hair: true,
  hairColor: 'brown',
  inchHeight: '62 inches',
  pets: ['Gary', 'Charlotte'],
  spouse: 'Dave',
  siblings: [
    {
      name: 'Jacci',
      age: 35,
      hairColor: 'brown'
    }, 
    {
    
    }
  ],
  printMessage: function(text) {
    console.log(text);
  }
}

// allie.pets[1];
allie.siblings[0].age;


// console.log(allie);
// myObjectName.key
// console.log(allie.hairColor);
// console.log(allie["hairColor"]);

var myProperty = "age";
// console.log(allie[myProperty]);

// allie.printMessage('Hi!');

// I could write my siblings property like this, so it is an array of variables, which are objects
siblings: [jacci, matt],

var jacci = {
  name: 'Jacci',
  age: 35,
  hairColor: 'brown'
} 

var matt = {
  name: 'Matt',
  age: 30,
  hairColor: 'brown'
}

allie.siblings['jacci']; // this will not work
allie.siblings[0]; // this will work