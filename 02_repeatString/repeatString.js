const repeatString = function(text, nCount) {
    let formatedText = '';
    if (nCount < 0) return 'ERROR';
    
    for (let i = 0; i < nCount; i++) {
        formatedText += `${text}`;
    }
    return formatedText;

};

// Do not edit below this line
module.exports = repeatString;
