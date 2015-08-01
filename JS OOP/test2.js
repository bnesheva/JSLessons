// JavaScript source code

// JavaScript source code

function solve(params) {
    var rowsCols = params[0].split(' '),
        rows = parseInt(rowsCols[0]),
        cols = parseInt(rowsCols[1]),
        allDirs,
        dirsCols,
        matrixDir = [],
        matrixNum = [],
        currentStep,
        currentRow = rows-1,
        currentCol = cols-1,
        currentObj,
        sum = 0,
        stepCounter = 0,
        cell,
        cAdd = 0,
        rAdd = 0,
        c1 = 0,
        r1 = 0,
        j,
        i;




    makeMatrixDir();
    makeMatrixNum();

    //console.log(rowsCols);


    //////////////////////////////////////////////
    function walk() {
        i = 0;



       while (true) {
        //while (i < 100) {
            console.log('start loop');
            console.log(currentRow);
            console.log(currentCol);
            console.log('steps ' + stepCounter);
            console.log('type of jump');
            console.log(matrixDir[currentRow][currentCol]);

            //========== check


            if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
                //console.log('successed')
                return 'Go go Horsy! Collected  ' + sum + ' weeds';
                break;
            }
            if (matrixNum[currentRow][currentCol] === 'X') {
                //console.log('failed at (' + currentRow + ', ' + currentCol)
                return 'Sadly the horse is doomed in ' + stepCounter + ' jumps';
                break;
            }
            //============

            //console.log(matrixNum[currentRow][currentCol]);

            sum += matrixNum[currentRow][currentCol];

            // console.log('sum is ' + sum);

            rAdd = matrixDir[currentRow][currentCol].row;
            cAdd = matrixDir[currentRow][currentCol].col;

            //console.log(currentRow + matrixDir[currentRow][currentCol].row);
            //console.log(currentCol + matrixDir[currentRow][currentCol].col);

            matrixNum[currentRow][currentCol] = 'X';

            //================= final changes = no reading after this point
            currentRow = currentRow + rAdd;
            currentCol = currentCol + cAdd;
            console.log('changing');
            console.log(currentRow);
            console.log(currentCol);
            stepCounter += 1;
            i += 1;
        }
        



    }

    function makeMatrixDir() {
        for (i = 1; i < params.length; i += 1) {
            matrixDir.push([]);
            dirsCols = [];
            dirsCols = params[i].split('');

            for (j = 0; j < cols; j += 1) {

                //console.log(dirsCols);

                if (dirsCols[j] === '1') {
                    dirsCols[j] = {
                        row: -2,
                        col: 1
                    }
                    matrixDir[i - 1].push(dirsCols[j]);

                }
                if (dirsCols[j] === '2') {
                    dirsCols[j] = {
                        row: -1,
                        col: 2
                    }
                    matrixDir[i - 1].push(dirsCols[j]);
                }
                if (dirsCols[j] === '3') {
                    dirsCols[j] = {
                        row: 1,
                        col: 2
                    }
                    matrixDir[i - 1].push(dirsCols[j]);
                }
                if (dirsCols[j] === '4') {
                    dirsCols[j] = {
                        row: 2,
                        col: 1
                    }
                    matrixDir[i - 1].push(dirsCols[j]);
                }
                if (dirsCols[j] === '5') {
                    dirsCols[j] = {
                        row: 2,
                        col: -1
                    }
                    matrixDir[i - 1].push(dirsCols[j]);

                }
                if (dirsCols[j] === '6') {
                    dirsCols[j] = {
                        row: 1,
                        col: -2
                    }
                    matrixDir[i - 1].push(dirsCols[j]);
                }
                if (dirsCols[j] === '7') {
                    dirsCols[j] = {
                        row: -1,
                        col: -2
                    }
                    matrixDir[i - 1].push(dirsCols[j]);
                }
                if (dirsCols[j] === '8') {
                    dirsCols[j] = {
                        row: -2,
                        col: -1
                    }
                    matrixDir[i - 1].push(dirsCols[j]);
                }
            }
        }
        //console.log('matrixDir');
        //console.log(matrixDir);
        return matrixDir
    }


    function makeMatrixNum() {
        for (i = 0; i < rows; i += 1) {
            matrixNum.push([]);
            for (j = 0; j < cols; j += 1) {
                cell = Math.pow(2, i) - j;
                //console.log('cell is ' + cell);
                matrixNum[i].push(cell);
            }
        }
        //console.log(matrixNum);
        return matrixNum
    }

    //////////////////////////




    ///////////////////
    return walk()
}

var test1 = [
  '3 5',
  '54561',
  '43328',
  '52388',
]

var test2 = [
  '3 5',
  '54361',
  '43326',
  '52188',
]

//solve(params);
solve(test2)
