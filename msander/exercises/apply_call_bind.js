

var sum = function(x, y, z) {
	return x+y+z;
}

sum(1,2,3);
// returns 6

sum.call(null, 1, 2, 3);
// context is null in this example
// call takes parameters individually
// returns 6

sum.apply(null, [1,2,3]);
// context is null in this example
// apply takes an array of parameters
// returns 6

function logXPlusY(y) {
	console.log(this.x+y);
}

logXPlusY(5);
// logs NaN because x is undefined

logXPlusY.call({x:3}, 6);
// logs 9

logXPlusY.apply({x:3}, [6]);
// logs 9

// BIND - create a new function with the provided context bound to it.
function logX(){
	console.log(this.x);
}

logX.call({x:3});
// logs 3

logX.apply({x:3});
// logs 3

var log3 = logX.bind({x:3});
log3();
// logs 3

var log4 = logX.bind({x:4});
log4();
// logs 4