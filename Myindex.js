 // задание 7.7.1
 
 function printInfo(name, age){
    console.log(`Name: ${name}, Age: ${age} `)
}

const person = {
    name: "Vasya",
    age: 1000
}

let func = printInfo;

func.call(printInfo, person.name, person.age)


// задание 7.7.2

 function calculate(a, b, operator) {
     return operator(a, b);
}

 const values = [2, 3, "+"];
 const result = calculate.apply(values);
 console.log(result);

//задание 7.7.3

const users = [
    { name: "Alisa", age: 16 },
    { name: "Kirill", age: 20 },
    { name: "Bob", age: 30 }
];

const newUsersOver18 = users.filter(user => user.age >= 18);
const nameUsersOver18 = newUsersOver18.map(user => user.name);
console.log(nameUsersOver18);


// задание 7.7.4

function setFullName(obj, name) {
    obj.fullName = name;
  }
  const setPersonFullName = setFullName.bind(null, person);
  setPersonFullName("John Smith");
  console.log(person.fullName);






// задание 7.7.5

const arr = [1, 2, 3, 4, 1, 2, 5];
function uniqueSorted(arr) {
    const unique = arr.filter((item, index) => arr.indexOf(item) === index);
    const sortAsc = unique.sort((a, b) => a - b);
    return sortAsc;  
}
const uniqueSortedArr = uniqueSorted(arr);
console.log(uniqueSortedArr);










