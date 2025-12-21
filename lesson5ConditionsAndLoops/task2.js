let grade = Math.floor(Math.random() * 111);
let result;

switch (true) {
    case (grade <= 60):
        result = "Fail";
        break;
    case (grade <= 70):
        result = "Satisfactory";
        break;
    case (grade <= 80):
        result = "Good";
        break;
    case (grade <= 90):
        result = "Very good";
        break;
    case (grade <= 100):
        result = "Excellent";
        break;
    default:
        result = "a lie! Pls tell the truth, 100 is max grade!";
}
console.log(`My grade is ${grade}. And it is ${result}`);
