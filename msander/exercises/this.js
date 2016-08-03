// this refers to the current context
// this in an anonymous function always refers to the global scope

var self=this;

var y;

function Foo(x,y) {
	y=y;
	this.x=x;
}

function xAndY() {
	return +y;
}

Foo.prototype.getXandY = function() {
	return xAndY();
}

var f = new Foo(5,6);
console.log(f.x);
console.log(f.y);
console.log(f.getXandY());