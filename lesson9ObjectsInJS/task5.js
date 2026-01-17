const users = [
    {
        name: "Mike", age: 15, email: "mikewheeler@gmail.com"
    },
    {
        name: "Nancy", age: 25, email: "nancywheeler@gmail.com"
    },
    {
        name: "Holly", age: 10, email: "hollywheeler@gmail.com"
    }
];

for (const user of users) {
    const { name, age, email } = user;
    console.log(`Name is ${name}, Age is ${age}, Email is ${email}`);
};
