// JavaScript source code

function solve(params) {

    var s = params[0], c1 = params[1], c2 = params[2], c3 = params[3];
    var answer = 0;
    //

    var price,
        priceMax = 0;

    for (var i = 0; i < s/c1 + 1; i += 1) {
        for (var j = 0; j < s/c2 + 1; j += 1) {
            for (var k = 0; k < s/c3 + 1; k += 1) {
                price = (i * c1) + (j * c2) + (k * c3);
                if ((price <= s) && (price > priceMax)) {
                    //console.log('pmax is ' + priceMax);
                    //console.log('price ' + price);
                    priceMax = price;
                    //console.log('now pmax is ' + priceMax);
                    answer = priceMax;
                }
            }
        }
    }



 //   console.log(answer);
    return answer;

}

test1 = [110, 13, 15, 17];
test2 = [20, 10, 200, 300];
test3 = [110, 19, 29, 39];

console.log(solve(test1) == 110);
console.log(solve(test2) == 11);
console.log(solve(test3) == 107);