const leftToRight = 'Довод'.toLowerCase();
let rightToLeft = '';
for (let i = leftToRight.length - 1; i >= 0; i -= 1) {
    rightToLeft += leftToRight[i];
}

if (leftToRight === rightToLeft) {
    console.log('Слово "Довод" является палиндромом');

} else {
    console.log('Слово "Довод" не является палиндромом');
}








