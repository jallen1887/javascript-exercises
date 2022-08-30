const removeFromArray = function(testArray, ...args) {
    for (let i = 0; i < args.length; i++) {
        const index = testArray.findIndex((arrayValue) => 
        arrayValue === args[i]);
        
        if (index < 0) continue;

        testArray.splice(index, 1);
    }
    return testArray;
};

// Do not edit below this line
module.exports = removeFromArray;
