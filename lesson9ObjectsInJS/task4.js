const person = {
    firstName: "Jane",
    lastName: "Hopper",
    age: 15,
    courses: ["Math", "Art", "History"]
};

person.email = "janehopper@gmail.com"
delete person.age;
console.log(person);
