function concat(a, b) {
	if (a == b) {
		return a + b;
	}
	return ''.concat(a, b);
}

function testArray() {
	let arr = [];
	arr[0] = 'a';
	arr['name'] = 'bob';  // Noncompliant
	arr[1] = 'foo';
}

module.exports = concat;