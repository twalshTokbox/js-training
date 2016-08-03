// Need another week on this one
/*
Why use prototype?
  * Can update prototype and all objects created from it are updated.
  * Functions in the prototype are only stored once (resource usage).
  * Check instance first, then prototype (override).
*/

// A vector type
function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vectory) {
    return new Vector(this.x+vector.x, this.y+vector.y);
}

Object.defineProperty(Vector.prototype, "minus", {
	enumerable: false,
	value: function(vector) {return new Vector(this.x-vector.x, this.y-vector.y);}
});
Object.defineProperty(Vector.prototype, "length", {
	enumerable: false,
	get: function() { return Math.sqrt(this.x*this.x + this.y*this.y); }
});