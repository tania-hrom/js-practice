let grade = Math.floor(Math.random() * 111);
let result;

if (grade < 60) {
    result = "fail";
} else if (grade <= 70) {
    result = "satisfactory";
} else if (grade <= 80) {
    result = "good";
} else if (grade <= 90) {
    result = "very good";
} else if (grade <= 100) {
    result = "excellent";
} else {
    result = "a lie! Pls tell the truth, 100 is max grade!";
}
console.log(`My grade is ${grade}. And it is ${result}`);
