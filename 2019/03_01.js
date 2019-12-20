let wires = document.documentElement.innerText.split("\n").map(el => el.split(','));
let getWireMatrix = wire => {
    let x = 0;
    let y = 0;
    let matrix = {};

    for (let i in wire) {
        let currentWay = wire[i].slice(0, 1);
        let currentLength = wire[i].replace(/\D/g, '');
        switch (currentWay) {
            case 'R':
            case 'L':
                for (let k = 0; k < currentLength; k++) {
                    currentWay === 'R' ? x++ : x--;
                    let loc = x.toString() + ';' + y.toString();
                    matrix[loc] = 1;
                }
                break;
            case 'U':
            case 'D':
                for (let k = 0; k < currentLength; k++) {
                    currentWay === 'U' ? y++ : y--;
                    let loc = x.toString() + ';' + y.toString();
                    matrix[loc] = 1;
                }
                break;
        }
    }

    return matrix;
};

let min = 999999;
let matrixX = getWireMatrix(wires[0]);
let matrixY = getWireMatrix(wires[1]);
Object
    .keys(matrixX)
    .filter(key => {
        return typeof matrixY[key] !== 'undefined'
    })
    .forEach(el => {
        [x, y] = el.split(';').map(x => {
            return parseInt(x, 10);
        });
        let distance = Math.abs(x) + Math.abs(y);
        if (distance < min) min = distance;
    });

console.log('Result: ' + min);
