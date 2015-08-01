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
        currentRow = 0,
        currentCol = 0,
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
    //walk();
    //console.log(walk())




    //////////////////////////////////////////////
    function walk() {
        i = 0;
        
        while (true) {
            //console.log('start loop');
            //console.log(currentRow);
            //console.log(currentCol);
            //console.log(stepCounter);

            //========== check


            if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
                //console.log('successed')
                return 'successed with ' + sum;
                break;
            }
            if (matrixNum[currentRow][currentCol] === 'X') {
                //console.log('failed at (' + currentRow + ', ' + currentCol)
                return 'failed at (' + currentRow + ', ' + currentCol + ')';
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
            //console.log(currentRow);
            //console.log(currentCol);
            //stepCounter += 1;
            i += 1;
        }



    }

    function makeMatrixDir() {
        for (i = 1; i < params.length; i += 1) {
            matrixDir.push([]);
            dirsCols = params[i].split(' ');
            for (j = 0; j < cols; j += 1) {
                if (dirsCols[j] === 'dr') {
                    dirsCols[j] = {
                        row: 1,
                        col: 1
                    }
                     matrixDir[i-1].push(dirsCols[j]);
                    
                }
                if (dirsCols[j] === 'dl') {
                    dirsCols[j] = {
                        row: 1,
                        col: -1
                    }
                     matrixDir[i-1].push(dirsCols[j]);
                }
                if (dirsCols[j] === 'ur') {
                    dirsCols[j] = {
                        row: -1,
                        col: 1
                    }
                    matrixDir[i - 1].push(dirsCols[j]);
                }
                if (dirsCols[j] === 'ul') {
                    dirsCols[j] = {
                        row: -1,
                        col: -1
                    }
                    matrixDir[i-1].push(dirsCols[j]);
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
                cell = Math.pow(2, i) + j;
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

var params = [
  '3 5',
  'dr dl dr ur ul',
  'dr dr ul ur ur',
  'dl dr ur dl ur'
]


solve(params)
