let wires = document.documentElement.innerText.split("\n").map(el => el.split(','));
let getWireMatrix = (wire, pos = null) => {
    let x = 0;
    let y = 0;
    let matrix = {};
    let steps = 0;
    let finalStep = false;

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
                    if (pos && !finalStep) {
                        if (pos.x === x && pos.y === y) {
                            finalStep = true;
                        } else {
                            steps++;
                        }
                    }
                }
                break;
            case 'U':
            case 'D':
                for (let k = 0; k < currentLength; k++) {
                    currentWay === 'U' ? y++ : y--;
                    let loc = x.toString() + ';' + y.toString();
                    matrix[loc] = 1;
                    if (pos && !finalStep) {
                        if (pos.x === x && pos.y === y) {
                            finalStep = true;
                        } else {
                            steps++;
                        }
                    }
                }
                break;
        }
    }

    return pos ? steps + 1 : matrix;
};

let min = 999999;
let matrixX = getWireMatrix(wires[0]);
let matrixY = getWireMatrix(wires[1]);
let closestPoint;
Object
    .keys(matrixX)
    .filter(function (key) {
        return typeof matrixY[key] !== 'undefined'
    })
    .forEach(function (el) {
        [x, y] = el.split(';').map(function (x) {
            return parseInt(x, 10);
        });
        closestPoint = (getWireMatrix(wires[0], {x: x, y: y}) + getWireMatrix(wires[1], {x: x, y: y}));
        if (closestPoint < min) {
            min = closestPoint;
        }
    });


console.log('Result 2: ' + min);
