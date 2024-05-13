


function check(text) {
    const leftToRight = text.toLowerCase();
    let rightToLeft = '';
    for (let i = leftToRight.length - 1; i >= 0; i -= 1) {
        rightToLeft += leftToRight[i];
    }

    if (leftToRight === rightToLeft) {
        console.log('Слово "' + text + '" является палиндромом');

    } else {
        console.log('Слово "' + text + '" не является палиндромом');

    }


};

check("Довод");
check("Сантимент");



const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const arrUniq = new Set()
arr.forEach(element => {
 arrUniq.add(element)   
});
console.log(Array.from(arrUniq));



const promptText = prompt('Введите число');
const arr2 = [];
for(let i = 0; i <= Number(promptText); i++){
    arr2.push(i)
}
console.log(arr2);


const arr3 = ["x","0","x","0","x","0","x","0","x"];
let xo = "";
const ex=[2,5,8];
arr3.forEach((value,index)=>{
    xo+=value+" ";
    if(ex.includes(index)){
        console.log(xo);
        xo ="";
    }
})









