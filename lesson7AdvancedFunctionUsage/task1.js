const handleNum = (number, onEvenCb, onOddCb) => {
    if (number % 2 === 0) {
        onEvenCb(number);
    }
    else { 
        onOddCb(number); 
    }
}

const handleEven = (number) => console.log(`Your number is ${number} and it's even`);
const handleOdd = (number) => console.log(`Your number is ${number} and it's odd`);

let myNumber = Math.floor(Math.random() * 101);
handleNum(myNumber, handleEven, handleOdd);
 