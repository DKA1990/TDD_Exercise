const convertDecimal = require('./romannumerals')

test('check function converts simplest number (1)', () => {
    expect(convertDecimal(1)).toBe('I');
});