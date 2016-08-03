var forEach = function(collection, iteratee){
	for(var key in Object.keys(collection)){
		collection[key]=iteratee(collection[key]);
	}
	return collection
}
console.log(Object.keys({a:1, b:2}));
// ["a", "b"]

console.log(forEach({a:1, b:2}, function(x) {return x+1;}));
// {0: NaN, 1: NaN, a: 1, b: 2}

var reduce = function(collection, combine){
    var result = collection[];
    forEach(collection, combine) {
    	result = combine(result)
    }
}