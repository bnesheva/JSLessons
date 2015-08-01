// JavaScript source code


function solve(param) {
    var sum = parseInt(param[0]),
        car = 4,
        trike = 3,
        truck = 10,
        trucks = 0,
        trikes = 0,
        cars = 0,
        counter = 0,
        i,
        j,
        k;


    console.log(sum);



    for (i = 0; i <= (sum / trike) ; i += 1) {
        console.log('working');
        for (j = 0; j <= (sum / car) ; j += 1) {
            for (k = 0; k <= (sum / trucks) ; k += 1) {
                console.log(i * trike);
                console.log(j * car);
                console.log(k * truck);
                if (((i * trike) + (j * car) + (k * truck)) === sum) {
                    counter += 1;
                    console.log('found');
                }
            }
        }
        console.log(counter)
    }






    console.log(sum / trike);


    return counter
}




var test1 = ['120'];
solve(test1)
console.log(solve(test1));

