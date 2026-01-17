const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
const sortedNumbersList = structuredClone(numbersList).sort((a, b) => a - b);
console.log(numbersList);
console.log(sortedNumbersList);


const secondNumbersList = [1, 10, 14, 2, 4, 5, 43, 34]
const sortedSecondNumbersList = [...secondNumbersList].sort((a, b) => a - b);
console.log(secondNumbersList);
console.log(sortedSecondNumbersList);
