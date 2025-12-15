let number = Math.floor(Math.random() * 101);
console.log(`Here multiplication table up to 10 for number ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log(`Here the same multiplication table up to 10 for number ${number}:`);
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
