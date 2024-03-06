function squareSum(numbers) {
    numbers = numbers.map((i) => i * i)
    return numbers.reduce((acc, c) => acc + c, 0)
}