// Looping a triangle
for(i='#'; i.length<=7; i+='#'){
  console.log(i);
}

// FizzBuzz
for (i=1; i<=100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  }
  else if (i % 3 == 0) {
    console.log('Fizz');
  }
  else if (i % 5 == 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }};

// Chess board
var size=10;
var board='';
var char;
for (var i=1; i<=size; i++) {
  char = i % 2 == 0 ? '#' : ' ';
  var line = char;
  while (line.length % size != 0) {
    char == '#' ? char=' ' : char='#';
    line += char;
  }
  board+=line;
  board+='\n';
}
console.log(board);