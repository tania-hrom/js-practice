const divide = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error(`Denominator cannot be zero!`);
    }
    if (typeof numerator !== `number` || typeof denominator !== `number`) {
        throw new Error(`Please, use numbers for both numerator and denominator!`);
    }
    return numerator / denominator;
}


try {
    console.log(`Result is ${divide(25, 9)}`);
}
catch (e) {
    console.log(`Error: `, e.message);
} finally {
    console.log("Calculation is done!");
}

try {
    console.log(`Result is ${divide(25, 0)}`);
}
catch (e) {
    console.log(`Error: `, e.message);
} finally {
    console.log("Calculation is done!");
}

try {
    console.log(`Result is ${divide(`test`, 9)}`);
}
catch (e) {
    console.log(`Error: `, e.message);
} finally {
    console.log("Calculation is done!");
}