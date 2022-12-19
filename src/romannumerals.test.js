/*import {
    convertDecimal,
    convertDecimalKey,
} from "../romannumerals";*/
const { convertDecimal, convertDecimalKey } = require('./romannumerals')

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

test('check key function converts simplest number (1)', () => {
    expect(convertDecimal(1)).toBe('I');
});

test('check key function converts numbers 1 through 9', () => {
    expect(convertDecimalKey(1)).toBe('I');
    expect(convertDecimalKey(2)).toBe('II');
    expect(convertDecimalKey(3)).toBe('III');
    expect(convertDecimalKey(4)).toBe('IV');
    expect(convertDecimalKey(5)).toBe('V');
    expect(convertDecimalKey(6)).toBe('VI');
    expect(convertDecimalKey(7)).toBe('VII');
    expect(convertDecimalKey(8)).toBe('VIII');
    expect(convertDecimalKey(9)).toBe('IX');
});

test('check key function converts numbers above 10', () => {
    expect(convertDecimalKey(15)).toBe('XV');
});

test('check key function converts numbers above 100', () => {
    expect(convertDecimalKey(169)).toBe('CLXIX');
});

test('check key function converts numbers above 1000', () => {
    expect(convertDecimalKey(2473)).toBe('MMCDLXXIII');
});

test('check key function gives empty string when passed 0', () => {
    expect(convertDecimalKey(0)).toBe('');
});