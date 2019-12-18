let split = input.split(',').map(el => parseInt(el));

let x;
for(let i = 0; i<= split.length; i++) {
    if(i % 4 === 0) {
        if (split[i] === 99) {
            console.log(split);
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
