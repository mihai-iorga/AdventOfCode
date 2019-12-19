let vals = document.documentElement.innerText.split("\n")
let nextValue = 0;
let total;

vals.forEach(el => {
    total = parseInt(el);
    while (true) {
        total = Math.floor(total / 3) - 2;
        if (total > 0) {
            nextValue += total;
            console.log(total);
        } else {
            break;
        }
    }
});
console.log('Result 2: ' + nextValue);
