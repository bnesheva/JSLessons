// No functions, no cycles, only an array - to try to stick to waht we learned so far

// Task1

console.log('Task1 - is odd?')

var a = 3;

var isOdd = a % 2;

console.log(isOdd !== 0);

var a = 2;

var isOdd = a % 2;

console.log(isOdd !==0);

var a = -2;

var isOdd = a % 2;

console.log(isOdd !==0);

var a = -1;

var isOdd = a % 2;

console.log(isOdd !==0);

var a = 0;

var isOdd = a % 2;

console.log(isOdd !== 0);

//task2

console.log('Task 2 - is divisible both by 5 and 7?')
var a = 3;

var divide5 = a % 5;

var divide7 = a % 7;

console.log(divide5 === 0 && divide7 === 0);

var a = 0;

var divide5 = a % 5;

var divide7 = a % 7;

console.log(divide5 === 0 && divide7 === 0);

var a = 5;

var divide5 = a % 5;

var divide7 = a % 7;

console.log(divide5 === 0 && divide7 === 0);

var a = 7;

var divide5 = a % 5;

var divide7 = a % 7;

console.log(divide5 === 0 && divide7 === 0);

var a = 35;

var divide5 = a % 5;

var divide7 = a % 7;

console.log(divide5 === 0 && divide7 === 0);

var a = 140;

var divide5 = a % 5;

var divide7 = a % 7;

console.log(divide5 === 0 && divide7 === 0);

//Task 3 Rectangular Area

console.log('Task 3 - Rectangular area');

var a = 3;

var b = 4;

console.log(a * b + ' is the area');

var a = 2.5;

var b = 3;

console.log(a * b + ' is the area');

var a = 5;

var b = 5;

console.log(a * b + ' is the area');

// Task 4 - is 3rd digit 7?

console.log('Task 4 - is 3rd digit 7?');

var number = 5;
var numToString = number.toString();

console.log(numToString[numToString.length - 3] == 7);

var number = 701;
var numToString = number.toString();

console.log(numToString[numToString.length - 3] == 7);

var number = 1732;
var numToString = number.toString();

console.log(numToString[numToString.length - 3] == 7);
var number = 9703;
var numToString = number.toString();

console.log(numToString[numToString.length - 3] == 7);
var number = 877;
var numToString = number.toString();

console.log(numToString[numToString.length - 3] == 7);
var number = 777877;
var numToString = number.toString();

console.log(numToString[numToString.length - 3] == 7);
var number = 9999799;
var numToString = number.toString();

console.log(numToString[numToString.length - 3] == 7);

//Task 5 - Binary 3rd digit

console.log('Task 5 - Binary 3rd digit');

var a = 5;

var number = (a).toString(2);

var theBit = number.length < 4 ? 0 : number[number.length - 4];

console.log(theBit);


var a = 8;

var number = (a).toString(2);

var theBit = number.length < 4 ? 0 : number[number.length - 4];

console.log(theBit);


var a = 0;

var number = (a).toString(2);

var theBit = number.length < 4 ? 0 : number[number.length - 4];

console.log(theBit);


var a = 15;

var number = (a).toString(2);

var theBit = number.length < 4 ? 0 : number[number.length - 4];

console.log(theBit);


var a = 5343;

var number = (a).toString(2);

var theBit = number.length < 4 ? 0 : number[number.length - 4];

console.log(theBit);


var a = 62241;

var number = (a).toString(2);

var theBit = number.length < 4 ? 0 : number[number.length - 4];

console.log(theBit);

//Task 6 - Poins inside circle

console.log('Task 6 - Poins inside circle');

var radIndex = 25;

var x = 0;

var y = 1;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);


var x = -5;

var y = 0;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);



console.log(inside <= radIndex);


var x = -4;

var y = 5;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);


var x = 1.5;

var y = 3;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);


var x = -4;

var y = -3.5;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);


var x = 100;

var y = -30;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);


var x = 0;

var y = 0;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);


var x = 0.2;

var y = -0.8;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);


var x = 0.9;

var y = -4.93;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);


var x = 2;

var y = 2.665;

var xAbs = Math.abs(x);

var yAbs = Math.abs(y);

var inside = (xAbs * xAbs) + (yAbs * yAbs);

console.log(inside <= radIndex);

//Task 7 - Is Prime?

console.log('Task 7 - Is Prime?');

var m = 2;

var n = 1;

for (m; m <= Math.sqrt(n); m++) {
    if (n % m === 0) {
    n = false; }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

var n = 2;

var m = 2;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

var n = 3;

var m = 2;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

var n = 4;

var m = 2;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

var n = 9;

var m = 2;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

var n = 37;

var m = 2;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

var n = 97;

var m = 2;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

var n = 51;

var m = 2;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

var m = 2;

var n = 0;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);


var n = -3;

var m = 2;

for (m; m <= Math.sqrt(n) ; m++) {
    if (n % m === 0) {
        n = false;
    }
}

var prime = n <= 100 && n > 1 && n !== false;

console.log(prime);

//Task 8 - Trapezoid Area

console.log('Trapezoid Area');

var a = 5;
var b = 7;
var h = 12;
var area = ((a + b) / 2) * h;
area = Math.round((area + 0.00000001) * 10000000) / 10000000;
console.log(area);

var a = 2;
var b = 1;
var h = 33;
var area = ((a + b) / 2) * h;
area = Math.round((area + 0.00000001) * 10000000) / 10000000;
console.log(area);

var a = 8.5;
var b = 4.3;
var h = 2.7;
var area = ((a + b) / 2) * h;
area = Math.round((area + 0.00000001) * 10000000) / 10000000;
console.log(area);

var a = 100;
var b = 200;
var h = 300;
var area = ((a + b) / 2) * h;
area = Math.round((area + 0.00000001) * 10000000) / 10000000;
console.log(area);

var a = 0.222;
var b = 0.333;
var h = 0.555;
var area = ((a + b) / 2) * h;
area = Math.round((area + 0.00000001) * 10000000) / 10000000;
console.log(area);

//Task 9 - within a circle outside rectangular

console.log('Task 9 - within a circle outside rectangle');

var x =1;
var y =2;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var rectx = -1;

var recty = -1;

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);

var x = 2.5;
var y = 2;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);


var x = 0;
var y = 1;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);


var x = 2.5;
var y = 1;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);


var x = 2;
var y = 0;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);


var x = 4;
var y = 0;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);


var x = 2.5;
var y = 1.5;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);


var x = 2;
var y = 1.5;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);


var x = 1;
var y = 2.5;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);


var x = -100;
var y = -100;
var inCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(3, 2);

var inRect = x >= rectx && x <= rectx + 6 && y >= recty && y <= recty + 2;

var isIt = inCircle === true && inRect === false ? 'yes' : 'no';

console.log(isIt);



