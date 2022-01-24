const concat = require('./concat');

test("concat a to b to be equal to ab", () => {
 	expect(concat('a','b')).toBe('ab');
});
