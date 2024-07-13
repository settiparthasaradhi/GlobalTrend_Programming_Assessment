const  generateFibonacci=(n)=> {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

console.log(generateFibonacci(10));
