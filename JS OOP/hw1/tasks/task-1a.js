// JavaScript source code
function solve() {
    return function sumArray(arr) {
        var sum = 0;
        if (arr.length === 0) {
            return null;
        }
        for (var i = 0; i < arr.length; i += 1) {
            if (!(arr[i])) {
                throw 'Error!';
            }
            if (isNaN(parseInt(arr[i]))) {
                throw 'Error! This is not a number';
            }
            sum += parseInt(arr[i]);

        }
        return sum
    }
}
