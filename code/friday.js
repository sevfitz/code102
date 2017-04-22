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
