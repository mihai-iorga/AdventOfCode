let finished = false;
let check = 19690720;
for (let x = 0; x <= 99; x++){
    for (let y = 0; y <= 99; y++) {
        split = document.documentElement.innerText.split(',').map(el => parseInt(el));
        split[1] = x;
        split[2] = y;

        for(let i = 0; i<= split.length; i++) {
            if(i % 4 === 0) {
                if (split[i] === 99) {
                    break;
                }

                if(split[i] === 1) {
                    split[split[i+3]] = split[split[i+1]] + split[split[i+2]];
                    continue;
                }

                if(split[i] === 2) {
                    split[split[i+3]] = split[split[i+1]] * split[split[i+2]];
                }
            }
        }

        if (split[0] === check) {
            console.log('Result: ' + (100 * x + y));
            finished = true;
            break;
        }
    }
    if (finished) {
        break;
    }
}


console.log(split);
