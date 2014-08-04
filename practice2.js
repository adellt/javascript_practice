var i = 1;
var fib = [1,2];
var total = 0
var highest = 4000000;

while (i < highest) {
	i = fib[fib.length-1] + fib[fib.length-2];
	fib.push(i);
};

for (var n = 0; n < fib.length; n++) {
	if(fib[n] < highest) {
	    if (fib[n] % 2 === 0) {
		    total+=fib[n];
    	}
	}
};

document.write("The answer is: " + total);