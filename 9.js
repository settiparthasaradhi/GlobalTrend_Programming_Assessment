const  filterEvenNumbers=(array)=>array.filter(number => number % 2 !== 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterEvenNumbers(numbers);
console.log(oddNumbers); 
