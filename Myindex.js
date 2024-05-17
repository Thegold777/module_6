function printInfo(name, age){
    console.log(`Name: ${name}, Age: ${age} `)
}

const person = {
    name: "Vasya",
    age: 1000
}

let function = printInfo;

function.call(printInfo, person.name, person.age)




function calculate(a, b, operator) {
    return operator(a, b);
}

const values = [2, 3, "+"];
const result = calculate.apply(values);
console.log(result);











