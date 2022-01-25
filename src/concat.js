function concat(a, b) {
	if (a == b) {
		return a + b;
	}
	return ''.concat(a, b);
}

module.exports = concat;