const binaryConversion = num => {
    if (num === 0) {
        return "";
    }
    return binaryConversion(Math.floor(num / 2)) + (num % 2).toString();
};
console.log(binaryConversion(232));
