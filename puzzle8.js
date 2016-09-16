function Down(distance) {
  var steps = 0;
  while (steps<distance) {
    down();
    steps=steps+1;
  }
}

function Up(distance) {
  var steps = 0;
  while (steps<distance) {
    up();
    steps=steps+1;
  }
}

function Right(distance) {
  var steps = 0;
  while (steps<distance) {
    right();
    steps=steps+1;
  }
}

Down(8);
Right(2);
Up(7);
Right(2);
Down(7);
Right(2);
Up(7);
Right(2);
Down(7);
Right(2);
