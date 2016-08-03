// The sum of a range
function range(start, end, step) {
  var array = [];

  if (start === end) {
     array.push(start);
     return array;
  }
  else if (start < end) {
  	step == undefined ? step = 1 : step;
    for (var i=start; i <= end; i+=step) {
  	  array.push(i);
    }
  } else {
  	step == undefined ? step = -1 : step;
    for (var i=start; i >= end; i+=step) {
  	  array.push(i);
    }
  }
  return array;
}

function sum(array) {
  var value = 0;
  for (var i = 0; i < array.length; i++) {
    value += array[i];
  }
  return value;
}

// Reversing an array
function reverseArray(array) {
	var newArray = [];
	for (var i = array.length-1; i >=0; i--) {
		newArray.push(array[1]);
		console.log(newArray);
	}
	return newArray;
}

function reverseArrayInPlace (array) {
	for (var i = 0; i < array.length/2; i++) {
		var oldElement = array[i];
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = oldElement;
	}
}

// A list
function arrayToList (array) {
	var list = {};

	if (array.length==0) {
      return list;
    }
    else {
    	list.value=array[0];
    	array = array.slice(1);
    	list.rest = array.length === 0 ? null : arrayToList(array);
    }
	return list;
}

function listToArray (list) {
	var array = [];

	while (list && list.value != undefined) {
		array.push(list.value);
		list=list.rest;
	}
	return array;
}

function prepend (element, list) {
	return {value:element, rest:list};
}

function nth (list, n) {
	for (n; n>0; n--) {
		if (list.rest) {
			list=list.rest;
		} else {
			return undefined;
		}
	}
	return list.value;
}

// Deep comparison
function deepEqual(obj1, obj2) {
  //console.log(obj1, obj2);
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2;
    }
  
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

	for (var prop in obj1) {
      console.log(prop);
		if (!obj2[prop]) { 
			return false; 
		}

		if (!isObject(obj1[prop]) && !isObject(obj2[prop])) {
			if (obj1[prop] !== obj2[prop]) {
				return false;
			}
		}
      
        if (isObject(obj1[prop]) && isObject(obj2[prop])) {
            if(!deepEqual( obj1[prop], obj2[prop])) {
              return false;
            }
        }
	}
	return true;
}

function isObject(obj) {
	return obj !== null && typeof obj === "object";
}