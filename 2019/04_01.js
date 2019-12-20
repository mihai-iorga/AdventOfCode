let input = '246540-787419';
let [start, stop] = input.split('-').map(el => parseInt(el, 10));
let numberOfPasswords = 0;

for (let i = start; i <= stop; i++) {
    let num = i.toString().split('').map(el => parseInt(el, 10));
    let valid = 0;
    let hasAdjacent = false;
    for (let j = 1; j < num.length; j++) {
        if (num[j] >= num[j - 1]) {
            valid++;
        }
        if (num[j] === num[j - 1]) {
            hasAdjacent = true;
        }
    }
    if (valid === 5 && hasAdjacent) {
        numberOfPasswords++;
    }
}

console.log(numberOfPasswords);
