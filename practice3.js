var number = 600851475;
var factors = [];
var prime = [];

for (var i = 2; i < number; i++) {
	if (number % i === 0) {
		factors.push(i);
	}
};

for (var i = 0; i < factors.length; i++) {
    factor= [];
    for (var n = 1; n <= factors[i]; n++) {
        if (factors[i] % n === 0) {
            factor.push(n);
        }
    };
    if (factor.length === 2) {
        prime.push(factors[i]);
    }
};	


document.write("The answer is: " + prime[prime.length-1])