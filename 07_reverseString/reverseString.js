const reverseString = function(word) {
    const array = word.split("");
    array.reverse();
    return array.join('');
};

// Do not edit below this line
module.exports = reverseString;
