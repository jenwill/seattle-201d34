# Class 10: JS Debugging and More CSS Layout

<a id="top"></a>
## Lecture 10

## Today's Schedule
- Announcements
  - Reminder: weekly surveys will go out to students today
  - Project Week starts a week from today! Let's look over some samples of projects from recent offerings of this class.
- Code Review *[50 minutes]*
- [Go over the assigned readings](#readings) *[50 minutes]*
  - [Code snippet practice](#snippets)
- Code demo *[60 minutes]*

**Learning Objectives**

As a result of completing Lecture 10 of Code 201, students will:
- Have nailed down the functionality of their retail/data/table app, as measured by successful completion of the daily code assignments of the previous four days.
- Demonstrate understanding of fundamental CSS layout principles including block, inline, normal, relative, absolute, float, and fixed, as measured by successful completion of the daily code assignment and on a quiz administered in Canvas
- Be able to engage in discussion and demonstrate understanding of advanced CSS layout topics such as frameworks or responsive design, as measured by observation of the instructional staff.
- Be able to engage in discussion and demonstrate understanding of a variety of JS debugging techniques, including using console messages, the debugger statement, and debugging methodology as measured by observation of the instructional staff.

<a id="readings"></a>

## Readings

**JS Chapter 10: "Error Handling & Debugging"**

- p.452: Order of execution
- p.456: Execution context & hoisting
- p.457: Understanding scope
- p.458: Understanding errors
- p.462: How to deal with errors
- p.463: A debugging workflow
- p.476: Breakpoints
- p.484: Debugging tips
- p.485: Common errors

[-top-](#top)

<a id="snippets"></a>

## Practice: Code Snippets

These snippets exist for us to practice thinking about method chaining, event handlers, functions, and more!

### Snippet 1
```js
var fruits = ['apple', 'banana', 'canteloupe', 'dragonfruit'];

var x = 3;

console.log(fruits[x - 1].charAt(fruits.length - x));
// what is console.log'd?
```

### Snippet 2

```js
function Student(name, heightInInches, willTake301) {
  this.name = name;
  this.heightInInches = heightInInches;
  this.willTake301 = willTake301;
}

var classInfo201d34 = [
  new Student('GB Busch', 67, true),
  new Student('Roman Kireev', 65, true),
  new Student('Idont Likecode', 73, false)
];

// what single line of code will let me console.log Roman's height?
```

### Snippet 3

```js
// using the classInfo201d34 variable from above...

for (var i = 0; i < classInfo201d34.length; i++) {
  console.log(classInfo201d34[i].name.charAt(classInfo201d34[i].heightInInches % classInfo201d34[i].name.length));
}
// what is console.log'd?
// that line of code is fairly incomprehensible. How would you fix it?
```

### Snippet 4

```js
var num = 0;
function getNum() {
  var oldNum = num;
  num++;
  return oldNum;
}

console.log(getNum());
console.log(getNum());
console.log(getNum() + getNum());
// what is console.log'd?
```

### Snippet 5

```js
function addAndSubtract(a, b) {
  return [a + b, a - b];
}

console.log(addAndSubtract(getNum(), getNum()));
// what is console.log'd?

var saved = getNum();
console.log(addAndSubtract(getNum() + 3, saved));
// what is console.log'd?
```

### Snippet 6

```js
// starting back over at zero...
var num = 0;
function getNum() {
  var oldNum = num;
  num++;
  return oldNum;
}

function addAndSubtractNextNum(x) {
  var nextNum = getNum();
  return [x + nextNum, x - nextNum];
}

function addAndSubtractNextNum_v2(x) {
  return [x + getNum(), x - getNum()];
}

console.log(addAndSubtractNextNum(5));
console.log(addAndSubtractNextNum(5));
console.log(addAndSubtractNextNum_v2(5));
console.log(addAndSubtractNextNum_v2(5));
console.log(addAndSubtractNextNum(5));
// what is console.log'd?
```