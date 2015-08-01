// JavaScript source code



function solve(params) {
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),

        field = [],
        cell = '',
        char,
        countRows,
        moveNow = [],
        foundFig,

        ////////////////////


        tests = parseInt(params[rows + 2]),
        i,
        move;
    // Execute


    makeField();
    getFigurePositions();



    for (i = 0; i < tests; i+=1) {
        move = params[rows + 3 + i];
        // Your solution here


        moveNow = move.split(' ');

 //       console.log(moveNow[0]);
        
        //////////// check if it is empty 

        var fig = moveNow[0];

        for (j = 0; j < rows; j += 1) {
            //console.log(field[j]);
            for (k = 0; k < cols; k += 1) {
              
            //    console.log(field[j][k]);
          //      console.log(fig);


                if (field[j][k] === fig) {
                    var foundFig = false;
                    
                }
            }
        }
        //console.log('found?');
        //console.log(foundFig);


         






        if (foundFig === false) {
            console.log('no')
        }
        else {
            console.log('yes');
        }
        foundFig = true;
       // console.log('yes'); // or console.log('no');
    }

    /////


    function makeField() {
        for (i = 0; i < rows; i += 1) {
            field.push([]);
            for (j = 0; j < cols; j += 1) {
                char = String.fromCharCode(97 + j);
                //console.log('char is ' + char);
                cell = char + (cols-i);
                //console.log('cell is ' + cell);
                field[i].push(cell);
            }
        }
        //console.log(field);
        return field;
    }

    function getFigurePositions() {
        for (i = 2; i < rows + 2; i += 1) {
            countRows = i - 2;
            for (j = 0; j < cols; j += 1) {
                if (params[i].charAt(j) !== '-') {
                    field[countRows][j] = params[i].charAt(j);
                }
            }
        }
       // console.log(field);
        return field;
    }



    ///////////
}



var test1 = [
    '3',
    '4',
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'b2 d3'
]
solve(test1)