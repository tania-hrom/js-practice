// 4.1
let circleRadius = (Math.random() * 10).toFixed(0);
let circleSquare = Math.PI * Math.pow(circleRadius, 2);

console.log(`Circle radius is ${circleRadius} and square is ${circleSquare.toFixed(2)}`);

// 4.2
let rectangleLength = (Math.random() * 5).toFixed(0);
let rectangleWidth = (Math.random() * 15).toFixed(0);
let rectangleSquare = rectangleLength * rectangleWidth;

console.log(`Rectangle length is ${rectangleLength} and width is ${rectangleWidth}. Square is ${rectangleSquare.toFixed(2)}`);

// 4.3
let cylinderRadius = (Math.random() * 10).toFixed(0);
let cylinderHeight = (Math.random() * 30).toFixed(0);
let cylinderVolume = Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight;

console.log(`Cylinder radius is ${cylinderRadius}, height is ${cylinderHeight}. Volume is ${cylinderVolume.toFixed(2)}`);
