const recursion = (num) => {
    if (num > 0) {
        console.log(num);
        recursion(num - 1);
    } else {
        console.log(`Countdown is finished`);
    }
}

recursion(5);

