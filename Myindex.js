function printInfo(name, age){
    console.log(`Name: ${name}, Age: ${age} `)
}

const person = {
    name: "Vasya",
    age: 1000
}

let function = printInfo;

function.call(printInfo, person.name, person.age)












