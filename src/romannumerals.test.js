const convertDecimal = require('./romannumerals')

test('check function converts simplest number (1)', () => {
    expect(convertDecimal(1)).toBe('I');
});

test('check function converts numbers 1 through 9', () => {
    expect(convertDecimal(1)).toBe('I');
    expect(convertDecimal(2)).toBe('II');
    expect(convertDecimal(3)).toBe('III');
    expect(convertDecimal(4)).toBe('IV');
    expect(convertDecimal(5)).toBe('V');
    expect(convertDecimal(6)).toBe('VI');
    expect(convertDecimal(7)).toBe('VII');
    expect(convertDecimal(8)).toBe('VIII');
    expect(convertDecimal(9)).toBe('IX');
});

test('check function converts numbers above 10', () => {
    expect(convertDecimal(15)).toBe('XV');
});

test('check function converts numbers above 100', () => {
    expect(convertDecimal(169)).toBe('CLXIX');
});

test('check function converts numbers above 1000', () => {
    expect(convertDecimal(2473)).toBe('MMCDLXXIII');
});

test('check function gives empty string when passed 0', () => {
    expect(convertDecimal(0)).toBe('');
});