function pascalTriangle(row, col) {
    if (col == 0) {
        return 1;
    } else if (row == 0) {
        return 0;
    } else {
        return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
    }
}
console.log(pascalTriangle(10, 2)); // 10
