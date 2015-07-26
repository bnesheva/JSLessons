/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	
*/

function sum(arr) {
        var summ = 0;
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
            summ += parseInt(arr[i]);

        }
        return summ
}

module.exports = sum;