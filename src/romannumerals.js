function convertDecimal(num) {
    let numeralString = '';
    switch(num) {
        case 1:
            numeralString = 'I';
            break;
        case 2:
            numeralString = 'II';
            break;
        case 3:
            numeralString = 'III';
            break;
        case 4:
            numeralString = 'IV';
            break;
        case 5:
            numeralString = 'V';
            break;
        case 6:
            numeralString = 'VI';
            break;
        case 7:
            numeralString = 'VII';
            break;
        case 8:
            numeralString = 'VIII';
            break;
        case 9:
            numeralString = 'IX';
            break;
    }
    return numeralString;
}

module.exports = convertDecimal;