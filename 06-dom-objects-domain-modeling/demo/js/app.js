'use strict';

var months = ['May', 'June', 'July', 'August', 'September'];

var twoThousandSeventeen = {
  miles: [16, 43, 653, 19, 2],
  renderMiles: function() {
    // access the parent element from the DOM
    var ulElement = document.getElementById('seventeen');
  
    for(var i = 0; i < months.length; i++) {
      // 1. create element
      var listItemElement = document.createElement('li');
  
      // 2. give it content
      listItemElement.textContent = months[i] + ': ' + this.miles[i];
  
      // 3. append it to the DOM
      // parentElement.appendChild(childElement);
      ulElement.appendChild(listItemElement);
    }
  }
};

var twoThousandSixteen = {
  miles: [16, 43, 653, 19, 2],
  renderMiles: function() {
    // access the parent element from the DOM
    var ulElement = document.getElementById();
  
    for(var i = 0; i < months.length; i++) {
      // 1. create element
      var listItemElement = document.createElement('li');
  
      // 2. give it content
      listItemElement.textContent = months[i] + ': ' + twoThousandSeventeen.miles[i];
  
      // 3. append it to the DOM
      // parentElement.appendChild(childElement);
      ulElement.appendChild(listItemElement);
    }
  }
};

var twoThousandFifteen = {
  miles: [16, 43, 653, 19, 2]
};

// make list items
// May: 16
// June: 43
// access arrays by index
// give the list items content
// append them to the DOM


// function renderMiles() {
//   // access the parent element from the DOM
//   var ulElement = document.getElementById('seventeen');

//   for(var i = 0; i < months.length; i++) {
//     // 1. create element
//     var listItemElement = document.createElement('li');

//     // 2. give it content
//     listItemElement.textContent = months[i] + ': ' + twoThousandSeventeen.miles[i];

//     // 3. append it to the DOM
//     // parentElement.appendChild(childElement);
//     ulElement.appendChild(listItemElement);
//   }
// }

twoThousandSeventeen.renderMiles();