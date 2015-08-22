// JavaScript source code
//task1
console.log('Task1 - Print indexes multiplied with 5');
var i,
    i2;
multiplied = [],
numbers = [10,20,30,6,7,78,345,-4,56,4,7,34,567,8,5,9,2,7,0,-10],
len = numbers.length;
for (i = 0; i < len; i += 1) {
    multiplied.push(i * 5);
}
numbers = multiplied;
console.log(numbers);

//task2
console.log('Task2 - compare two arrays');

var i,
arr1 = ['a', 'b', 'z', 'a'],
arr2 = ['c', 'a', 'g', 'a', 'h'],
len1 = arr1.length,
len2 = arr2.length,
minLen;
if (len1 > len2) {
    minLen = len2;
    console.log('First array is longer!');
}
else if (len1 < len2) {
    minLen = len1;
    console.log('Second array is longer!');
}
else {
    minLen = len1;
    console.log('Arrays are of an equal lenth!')
}
console.log('Now we compare letters');
for (i = 0; i < minLen; i += 1) {
    if (arr1[i] > arr2[i]) {
        console.log(arr1[i] + ' > ' + arr2[i]);
    }
    else if (arr1[i] < arr2[i]) {
        console.log(arr1[i] + ' < ' + arr2[i]);
    }
    else if (arr1[i] === arr2[i]) {
        console.log(arr1[i] + ' = ' + arr2[i]);
    }
    else {
        console.log("can't compare :)")
    }
}


//task3
console.log('Task3 - Maximal sequence');

var i,
        j,
        result,
        seqInd = 0,
        seqIndTemp = 0;
seqLen = 0,
seqLenTemp = 0,
numbers = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
len = numbers.length;
for (i = 0; i < len; i += 1) {
    if (numbers[i] === numbers[i + 1]) {
        console.log('found equals ' + numbers[i] + ' on index ' + i);
        seqLenTemp += 1;
        if (seqLenTemp > seqLen) {
            seqIndTemp = i;
            console.log('seqIndTemp is ' + seqIndTemp + ' and seqLenTemp is ' + seqLenTemp);
            seqLen = seqLenTemp;
            seqInd = seqIndTemp;
            console.log('seqLen ' + seqLen + ', seqInd ' + seqInd);
        }
    } else {
        seqLenTemp = 1;
    }
}
result = numbers.splice(seqInd - seqLen + 2, seqLen);
console.log(result);


//task4
console.log('Task3 - Maximal increasing sequence');
var i,
    iSeq,
    maxSeq = 0,
    tempSeq = 0,
    Sequence,
    numbers = [3, 2, 3, 4, 2, 2, 4],
    len = numbers.length;

for (i = 1; i < len; i += 1) {
    if (numbers[i] > numbers[i - 1]) {
        tempSeq += 1;
        if (tempSeq > maxSeq) {
            maxSeq = tempSeq;
            iSeq = i;
        }
    } else {
        tempSeq = 1;
    }
}
Sequence = numbers.splice(iSeq - maxSeq + 1, maxSeq).join(', ');

console.log(Sequence);
/*=====================*/
	




//Task 5 - Selection Sort
console.log('Task 5 - Selection Sort');
var i,
    j,
    toRemove = 0,
    sorted = [],
    numbers = [7, 6, 8, 2, 8, 3],
    min = numbers[0],
    len = numbers.length;
console.log('test numbers are ' + numbers);
for (i = 0; i < len; i += 1) {
    for (j = 0; j < numbers.length; j += 1) {
        if (numbers[j] <= min) {
            min = numbers[j];
            toRemove = j;
        }
    }
    sorted.push(min);
    numbers.splice(toRemove, 1);
    min = numbers[0];
    toRemove = 0;
}
console.log('and the sorted numbers are ' + sorted);

//Task 6 Most frequent numbers
console.log('Task 6 - Most frequent numbers');
var i,
    j,
    freqInt,
    freqIntTemp,
    freqLen = 0,
    freqLenTemp = 0,
    numbers = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
    freq = numbers[0],
    len = numbers.length;

console.log('numbers are ' + numbers);

for (j = 0; j < len; j += 1) {
    for (i = 0; i < len; i += 1) {
    if (numbers[i] === freq) {
            freqIntTemp = numbers[i];
            freqLenTemp += 1;
            if (freqLenTemp > freqLen) {
                freqLen = freqLenTemp;
                freqInt = freqIntTemp;
            }
    }
}
    freq = numbers[j + 1];
    freqLenTemp = 0;
    }
    console.log( freqInt + '(' + freqLen + ' times)');
    

    //Task 7 Binary Search
    console.log('Task 7 - Binary Search');
    


    var numbers = [3, 5, 60, 70, 72, 76, 88, 90, 124, 134, 150],
        value,
        start = 0,
        len = numbers.length - 1,
        mid = 0;
        while (start <= len) {
            mid = Math.floor((start + len) / 2);

            if (numbers[mid] < value) {
                start = mid + 1;
            } else if (numbers[mid] > value) {
                len = mid - 1;
            } else {
                console.log('Index is ' + mid);
                break;
            }
        }
