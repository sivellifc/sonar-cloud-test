const concat = require('./concat');

test("concat a to b to be equal to ab", () => {
 	expect(concat('a','b')).toBe('ab');
});

test("concat a to a to be equal to aa", () => {
	expect(concat('a','a')).toBe('aa');
});
