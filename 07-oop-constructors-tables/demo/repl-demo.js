var andrew = {
  course: '201d34',
  enrolled: true,
  instructors: 'Allie and Michelle',
  firstName: 'Andrew',
  lastName: 'Bloom', 
  homeTown: 'New Orleans',
  introduction: function() {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ' and I am from ' + this.homeTown + '.';
  }
}

// andrew.introduction();

// CONSTRUCTOR FUNCTION 
// template for an object 
// function that takes object properties as parameters and returns an instance of an object 
// factory for object 

// SYNTAX 
// function ConstructorName(property1, property2, property3) {
//   this.property1 = property1;
//   this.property2 = property2;
//   this.property3 = property3;
// }

function Student(firstName, lastName, homeTown) {
  this.course = '201d34';
  this.enrolled = true;
  this.instructors = 'Allie and Michelle';
  this.first = firstName;
  this.last = lastName;
  this.home = homeTown;
}

Student.prototype.introduction = function() {
  return 'Hi, my name is ' + this.first + ' ' + this.last + ' and I am from ' + this.home + '.';
}

var andrew = new Student('Andrew', 'Bloom', 'New Orleans');
var gb = new Student('GB', 'Busch', 'Seattle');
// console.log(andrew);

andrew.introduction();
// gb.introduction();