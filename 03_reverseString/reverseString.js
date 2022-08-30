const reverseString = function(text) {
    let charArray = text.split('');
    charArray.reverse();
    return charArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
