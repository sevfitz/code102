// In today's assignment, you'll "refactor" the code from yesterday.
// After each TODO, once you get the code working, stop and add/commit
// your changes to your repository.

// TODO: Copy in your completed code from Wednesday.

// TODO: Refactor all the code into a single big function
//       called dayApp().

// TODO: What happens if you reload the page now?

// TODO: Add one line of code that calls your new function.
//       Now what happens when you reload the page?

// TODO: Refactor the math that gets a random day number
//       into a function called getDayNumber().

// TODO: Refactor the if/elseif/else block that comments
//       on each day into this function:
// function remarkOnDay(day) {
//
// }

var day = 'Monday';
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function remarkOnDay(day) {

  if (day === 'Thursday') {
    console.log('Is it Friday yet?');
  } else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else if (day === 'Monday') {
    console.log('Uggh. Another Monday');
  } else {
    console.log('Whistle while you work!')
  }
}

function getDayNumber() {
  for (var j = 0; j < days.length; j++) {
    dayNumber = Math.floor(Math.random() * days.length);
    console.log('index ' + dayNumber + ': ' + days[dayNumber]);
    day = days[dayNumber];
    remarkOnDay(day);
  }
}

getDayNumber();
