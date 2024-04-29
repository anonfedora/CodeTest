const decimalToBinary = n => {
    var binaryString = "";

    const decimalToBinaryHelper = n => {
        if (n <= 1) {
            binaryString += n;
            return;
        } else {
            decimalToBinaryHelper(Math.floor(n / 2));
            decimalToBinaryHelper(n % 2);
        }
    };
    decimalToBinaryHelper(n);
    return binaryString;
};
console.log(decimalToBinary(232));
