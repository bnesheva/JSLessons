/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(a, b) {
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

module.exports = findPrimes;