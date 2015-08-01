            
// JavaScript source code

function Solve(input) {
    //console.log('test initial');
    //console.log(input);

    var fieldSizes = toNumbers(input[0]),
        rows = fieldSizes[0],
        cols = fieldSizes[1],
        jumpKindTotal = fieldSizes[2],
        jumpKind,
        startPoint = {
            row: toNumbers(input[1])[0],
            col: toNumbers(input[1])[1]
        },
        tempRow = startPoint.row,
        tempCol = startPoint.col,

        jumps = [],
        jumpsMade = 0,
        sum = 0,


        counter = 0,
        k,
        j,
        i;


    //console.log('col ' + tempCol);
    //console.log(startPoint);

    //console.log('start at point');
    //console.log(startPoint);

    generateField();
    jumpType();

    //bigDeal();
    //function bigDeal() {
        k = 0;
        //i = 0;
        while (true) {
            //console.log('digit is ' + field[tempRow][tempCol]);
            if (tempRow >= rows || tempRow < 0 || tempCol >= rows || tempRow < 0) {
                return 'escaped ' + sum;
            }
            if (field[tempRow][tempCol] === 'X') {
                return 'caught ' + jumpsMade;
            }
            sum += field[tempRow][tempCol];
            field[tempRow][tempCol] = 'X';
            //console.log('digit was ' + field[tempRow][tempCol]);
            tempRow += jumps[k].row;
            tempCol += jumps[k].col;
           // console.log(tempCol);
            if (k < jumpKindTotal - 1) {
                k += 1;
            }
            else if (k === jumpKindTotal - 1) {
                k = 0;
            }
            //console.log('kind of jump ' + k);
            jumpsMade += 1;
           // console.log('digit is ' + field[tempRow][tempCol]);
           // console.log('row is ' + tempRow);
           // console.log('sum ' + sum);
            //console.log('jumped ' + jumpsMade);
        }


    //Generating different jumps

    function jumpType() {
        for (i = 2; i < input.length; i += 1) {
            jumpKind = {
                row: toNumbers(input[i])[0],
                col: toNumbers(input[i])[1],
            }
          //  console.log('jump is');
            //console.log(jumpKind);
            jumps.push(jumpKind);
        }

        return jumps;
    }



    //make field

    function generateField() {
        field = [];
        for (i = 0; i < rows; i += 1) {
            field[i] = []
            for (j = 0; j < cols; j += 1) {
                field[i][j] = counter += 1;
            }
        }

        return field;
    }
    //console.log('field is ');
    //console.log(field);
    //console.log('field is ' + JSON.stringify(field));




    function toNumbers(src) {
        return src.split(' ').map(Number);
    }
}


var input = [
    '6 7 3',
    '0 0',
    '2 2',
    '-2 2',
    '3 -1'

]

console.log(Solve(input));


