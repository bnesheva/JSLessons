// JavaScript source code

function solve(params) {
    var nk = params[0].split(' ').map(Number),
        n = nk[0],
        k = nk[1],
        s = params[1].split(' ').map(Number),
        sNext = [],
        i,
        j,
        l,
        first,
        last,
        currNum,
        result = 0;
    //// test params

    //console.log(len);




    //////////Start working
    
    for (j = 0; j < k; j += 1) {
        // first number


        first = s[0];
        //console.log(s[n - 1], s[1])
        if (first === 0) {
            first = Math.abs(s[n - 1] - s[1]);
            sNext.push(first);
        }
        else if (first === 1) {
            first = (s[n - 1] + s[1]);
            sNext.push(first);
        }
        else if ((first % 2) === 0) {
            //console.log(first + ' is even')
            first = Math.max(s[n - 1], s[1]);
            sNext.push(first);
        }
        else if ((first % 2) !== 0 && first !== 1) {
            //console.log(first + ' is odd')
            first = Math.min(s[n - 1], s[1]);
            sNext.push(first);
        }
        else {
           // console.log('fix this!')
        }
        //console.log(sNext);


        //middle num loop
        for (i = 1; i < n - 1; i += 1) {
            //console.log(s[i]);
            currNum = s[i];
            if (currNum === 0) {
                //console.log(currNum + ' is zero')
                currNum = Math.abs(s[i - 1] - s[i + 1]);
                sNext.push(currNum);
            }
            else if (currNum === 1) {
                currNum = (s[i - 1] + s[i + 1]);
                sNext.push(currNum);
            }
            else if ((currNum % 2) === 0) {
               // console.log(currNum + ' is even')
                currNum = Math.max(s[i - 1], s[i + 1]);
                sNext.push(currNum);
            }
            else if ((currNum % 2) !== 0 && currNum !== 1) {
              //  console.log(currNum + ' is odd')
                currNum = Math.min(s[i - 1], s[i + 1]);
                sNext.push(currNum);
            }
            else {
               // console.log('fix this!')
            }
           // console.log(sNext);
        }

        // last number


        last = s[n - 1];
       // console.log(s[n - 1], s[0])
        if (last === 0) {
            last = Math.abs(s[n - 2] - s[0]);
            sNext.push(last);
        }
        else if (last === 1) {
         //   console.log(last + ' is one')
            last = Math.abs(s[n - 2] + s[0]);
            sNext.push(last);
        }
        else if ((last % 2) === 0) {
           // console.log(last + ' is even')
            last = Math.max(s[n - 2], s[0]);
            sNext.push(last);
        }
        else if ((last % 2) !== 0 && last !== 1) {
          //  console.log(last + ' is odd')
            last = Math.min(s[n - 2], s[0]);
            sNext.push(last);
        }
        else {
          //  console.log('fix this!')
        }
       // console.log(sNext);

        s = sNext;
      
        sNext = [];



        // 


    }
 //   console.log('After loop');
 //   console.log(s);
   // console.log(sNext);
    
    //conting
    counting();
    function counting() {
        for (l = 0; l < n; l += 1) {
            result += s[l];
}
}


    // Your solution here
    console.log(result);
}




var test1 = [
    '5 1',
     '9 0 2 4 1'
];

solve(test1);
