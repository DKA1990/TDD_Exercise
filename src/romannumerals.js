function convertDecimal(num) {
    if (num > 3999) throw new Error("Maximum number exceeded");
    if (num < 0) throw new Error("Number cannot be below 0");
    let manipulatedNum = num;
    let numerals = '';
    while (manipulatedNum > 0) {
        let numLength = Math.floor(Math.log10(manipulatedNum)) + 1;
        let numPos = Math.floor(manipulatedNum / Math.pow(10, numLength - 1));
        if (numLength === 4) {
            for (let i = 0; i < numPos; i++) {
                numerals = numerals + 'M';
            }
        } else {
            numerals = numerals + numeralBuilder(numPos, numLength);   
        }
        manipulatedNum = manipulatedNum % (Math.pow(10, numLength - 1));
    }
    return numerals;
}

function numeralBuilder(num, len) {
    let numeralString = '';
    const charSet = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M']]
    switch(num) {
        case 1:
            numeralString = charSet[len - 1][0];
            break;
        case 2:
            numeralString = charSet[len - 1][0] + charSet[len - 1][0];
            break;
        case 3:
            numeralString = charSet[len - 1][0] + charSet[len - 1][0] + charSet[len - 1][0];
            break;
        case 4:
            numeralString = charSet[len - 1][0] + charSet[len - 1][1];
            break;
        case 5:
            numeralString = charSet[len - 1][1];
            break;
        case 6:
            numeralString = charSet[len - 1][1] + charSet[len - 1][0];
            break;
        case 7:
            numeralString = charSet[len - 1][1] + charSet[len - 1][0] + charSet[len - 1][0];
            break;
        case 8:
            numeralString = charSet[len - 1][1] + charSet[len - 1][0] + charSet[len - 1][0] + charSet[len - 1][0];
            break;
        case 9:
            numeralString = charSet[len - 1][0] + charSet[len - 1][2];
            break;
    }
    return numeralString;
}

const numeralKey = [[1000, 'M'], 
                    [900, 'CM'], 
                    [500, 'D'], 
                    [400, 'CD'], 
                    [100, 'C'], 
                    [90, 'XC'], 
                    [50, 'L'],
                    [40, 'XL'],
                    [10, 'X'],
                    [9, 'IX'],
                    [5, 'V'],
                    [4, 'IV'],
                    [1, 'I']];

function convertDecimalKey(num)  {
    let manipulatedNum = num;
    return numeralKey.reduce((accum, curr) => {
        while (manipulatedNum >= curr[0]) {
            accum = accum + curr[1];
            manipulatedNum = manipulatedNum - curr[0];
        }
        return accum;
    }, '');
}

console.log(convertDecimalKey(2473));

module.exports = { convertDecimal, convertDecimalKey };