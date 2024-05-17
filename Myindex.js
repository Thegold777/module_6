function printInfo(name, age){
    console.log(`Name: ${name}, Age: ${age} `)
}

const person = {
    name: "Vasya",
    age: 1000
}

let func = printInfo;

func.call(printInfo, person.name, person.age)












