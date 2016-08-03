// Minimum
function min(num1, num2) {
	if (num1 < num2) {
		return num1;
	} else {
		return num2;
	}
}
console.log(min(0, 10));
console.log(min(0, -10));

// Recursion
function isEven (num) {
	if (num == 0) {
		return true;
	}
	else if (num == 1) {
		return false;
	}
	else if (num < 0) {
		return isEven(-num);
	}
	return isEven(num - 2);
}

// Bean counting
function countBs (string){
	return countChar(string, "B");
}

function countChar(string, char){
	var count=0;
    for (i=0; i<string.length; i++) {
    	if (string.charAt(i) === char)
    		count++;
    }

	return count;
}