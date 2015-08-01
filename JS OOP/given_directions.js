// JavaScript source code

function solve(args) {
    var lab = args.slice(2),
        sizes = args[0].split(' '),
        rows = parseInt(sizes[0]),
        cols = parseInt(sizes[1]),
        posInit = args[1].split(' '),
        row = parseInt(posInit[0]),
        col = parseInt(posInit[1]),
        visited = {},
        sum = 0,
        count = 0,
        directions = {
            u: {
                row: -1,
                col: 0
            },
            r: {
                row: 0,
                col: +1
            },
            d: {
                row: +1,
                col: 0
            },
            l: {
                row: 0,
                col: -1
            }
        };
    function getValueAt(row, col, cols) {
        console.log('calculating')
        console.log(row * cols + col + 1);
        return row * cols + col + 1;
        
    }
    function inRange(val, bor) {
        return 0 <= val && val < bor;
    }
    while (true) {
        console.log('running');
        //check Range
        if (!inRange(row, rows) || !inRange(col, cols)) {
            return 'out ' + sum;
        }
        else {
            console.log('in Range');
        }
        // Check if visited
        var cellValue = getValueAt(row, col, cols);
        console.log('vaule of cell is ' + cellValue);
        if (visited[cellValue]) {
            return 'lost ' + count;
        }
        else {
            console.log('on unvisited');
        }
        sum += cellValue;
        console.log ('sum is ' + sum)
        count += 1;
        var dir = lab[row][col];
        console.log('dir is ' + dir);
        row += directions[dir].row;
        col += directions[dir].col;

        visited[cellValue] = true;

        console.log('visited is ');
        console.log(visited);
    }


}

var test1 = [
    "3 4",
    "1 3",
    "lrrd",
    "dlll",
    "rddd"
];

console.log(solve(test1));