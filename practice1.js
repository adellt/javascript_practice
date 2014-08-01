var numbers = [];
var no = 1
var total = 0

for(var no = 1; no < 1000; no++) {
	if (no % 3 === 0 || no % 5 === 0) {
	numbers.push(no);
	}
};

while(length < numbers.length) {
	total+=numbers[length];
	length++;
};

console.log("The answer is "+ total);
document.write("The answer is "+ total);