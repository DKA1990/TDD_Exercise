function convertDecimal(num) {
    let manipulatedNum = num;
    let numerals = '';
    while (manipulatedNum > 0) {
        let numLength = Math.floor(Math.log10(manipulatedNum)) + 1;
        let numPos = Math.floor(manipulatedNum / Math.pow(10, numLength - 1));
        numerals = numerals + numeralBuilder(numPos, numLength);
        manipulatedNum = manipulatedNum % (Math.pow(10, numLength - 1));
    }
    return numerals;
}

function numeralBuilder(num, len) {
    let numeralString = '';
    let charSet = [['I', 'V', 'X'], ['X', 'L', 'C']]
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

module.exports = convertDecimal;