// Function Declaration
function rectangleSquareDeclaration(width, height) {
    return width * height;
}
console.log(rectangleSquareDeclaration(2, 5));


// Function Expression
const rectangleSquareExpression = function (width, height) {
    return width * height;
}
console.log(rectangleSquareDeclaration(5, 10));

// Arrow Function
const rectangleSquareArrow = (width, height) => width * height;
console.log(rectangleSquareArrow(1, 8));
