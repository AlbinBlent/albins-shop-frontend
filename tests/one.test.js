describe('calculator', function () {
	it('1 + 1 should equal 2', function() {
		expect(calculator.sum(1 , 1)).toBe(2);
	});

	it('1 + 2 should equal 3', function() {
		expect(calculator.sum(1 , 2)).toBe(3);
	});

	it('2 + 2 should equal 4', function() {
		expect(calculator.sum(2 , 2)).toBe(4);
	});
});
