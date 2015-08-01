function solve() {

    return function findPrimesInRange(a, b) {
        var primes = [],
                i,
                j,
                divider,
                isPrime;
        a = +a;
        b = +b;

        if (arguments.length < 2 || isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
            throw 'wrong parameters';
        }

        for (i = a; i <= b; i += 1) {
            divider = Math.sqrt(i);
            isPrime = true;

            if (i < 2) {
                isPrime = false;
            }

            for (j = 2; j <= divider; j += 1) {
                if (!(i % j)) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                primes.push(i);
            }
        }
        return primes;
    }




}

