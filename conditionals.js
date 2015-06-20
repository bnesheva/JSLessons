//Task 1 - Exchange if greater
console.log('Task 1 - Exchange if greater');

var a = 5;

var b = 2;

var change;

if (a > b) {;
    change = a;
    a = b;
    b = change;
};
console.log(a + ' ' + b);
//The rest of the examples

var a = 3;

var b = 4;

if (a > b) {
    var change = '';
    change = a;
    a = b;
    b = change;
};
console.log(a + ' ' + b);

var a = 5.5;

var b = 4.5;

if (a > b) {
    var change = '';
    change = a;
    a = b;
    b = change;
};
console.log(a + ' ' + b);

//Task 2 - Multiplication Sign

console.log('Task 2 - Multiplication Sign');

var a = 5;
var b = 2;
var c = 2;
var sign;

if (a > 0 && b > 0 && c > 0) {
    sign = '+';
}
else if (a < 0 && b < 0 && c < 0) {
    sign = '-';
}
else if (a < 0 && b > 0 && c > 0) {
    sign = '-';
}
else if (a < 0 && b < 0 && c > 0) {
    sign = '+';
}
else if (a === 0 && b < 0 && c > 0) {
    sign = '0';
}
console.log(sign);

//the rest of the example
var a = -2;
var b = -2;
var c = 1;
var sign;

if (a > 0 && b > 0 && c > 0) {
    sign = '+';
}
else if (a < 0 && b < 0 && c < 0) {
    sign = '-';
}
else if (a < 0 && b > 0 && c > 0) {
    sign = '-';
}
else if (a < 0 && b < 0 && c > 0) {
    sign = '+';
}
else if (a === 0 && b < 0 && c > 0) {
    sign = '0';
}
console.log(sign);
var a = -2;
var b = 4;
var c = 3;
var sign;

if (a > 0 && b > 0 && c > 0) {
    sign = '+';
}
else if (a < 0 && b < 0 && c < 0) {
    sign = '-';
}
else if (a < 0 && b > 0 && c > 0) {
    sign = '-';
}
else if (a < 0 && b < 0 && c > 0) {
    sign = '+';
}
else if (a === 0 && b < 0 && c > 0) {
    sign = '0';
}
console.log(sign);
var a = 0;
var b = -2.5;
var c = 4;
var sign;

if (a > 0 && b > 0 && c > 0) {
    sign = '+';
}
else if (a < 0 && b < 0 && c < 0) {
    sign = '-';
}
else if (a < 0 && b > 0 && c > 0) {
    sign = '-';
}
else if (a < 0 && b < 0 && c > 0) {
    sign = '+';
}
else if (a === 0 && b < 0 && c > 0) {
    sign = '0';
}
console.log(sign);
var a = -1;
var b = -0.5;
var c = -5.1;
var sign;

if (a > 0 && b > 0 && c > 0) {
    sign = '+';
}
else if (a < 0 && b < 0 && c < 0) {
    sign = '-';
}
else if (a < 0 && b > 0 && c > 0) {
    sign = '-';
}
else if (a < 0 && b < 0 && c > 0) {
    sign = '+';
}
else if (a === 0 && b < 0 && c > 0) {
    sign = '0';
}
console.log(sign);

//Task 3 - Biggest of 3

console.log('Task 3 - Biggest of 3');

var a = 5;
var b = 2;
var c = 2;
if (a > b) {
    if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else if (a < b) {
    if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

//The rest of the examples

var a = -2;
var b = -2;
var c = 1;
if (a > b) {
    if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else if (b > a) {
    if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
else if (c > b && c > b) {
    console.log(c);
}
var a = -2;
var b = 4;
var c = 3;
if (a > b) {
    if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else if (a < b) {
    if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
var a = 0;
var b = -2.5;
var c = 5;
if (a > b) {
    if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else if (a < b) {
    if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
var a = -0.1;
var b = -0.5;
var c = -1.1;
if (a > b) {
    if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else if (a < b) {
    if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

//Task 4 - Sort Numbers
console.log('Task 4 - Sort Numbers');

var a = 5;
var b = 1;
var c = 2;
if (a >= b) {
    if (a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
else if (b > a) {
    if (b >= c) {
        if (a >= c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}

//the rest of the example
var a = -2;
var b = -2;
var c = 1;
if (a >= b) {
    if (a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
else if (b > a) {
    if (b >= c) {
        if (a >= c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
var a = -2;
var b = 4;
var c = 3;
if (a >= b) {
    if (a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
else if (b > a) {
    if (b >= c) {
        if (a >= c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
var a = 0;
var b = -2.5;
var c = 5;
if (a >= b) {
    if (a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
else if (b > a) {
    if (b >= c) {
        if (a >= c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
var a = -1.1;
var b = -0.5;
var c = -0.1;
if (a >= b) {
    if (a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
else if (b > a) {
    if (b >= c) {
        if (a >= c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
var a = 10;
var b = 20;
var c = 30;
if (a >= b) {
    if (a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
else if (b > a) {
    if (b >= c) {
        if (a >= c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
var a = 1;
var b = 1;
var c = 1;
if (a >= b) {
    if (a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
else if (b > a) {
    if (b >= c) {
        if (a >= c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}

//Task 5 - Digit as word
console.log('Task 5 - Digit as word');

var myNumber = 2;
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);

//The rest of the examples


var myNumber = 1;
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);


var myNumber = 0;
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);


var myNumber = 5;
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);


var myNumber = -0.1;
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);


var myNumber = 'hi';
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);


var myNumber = 9;
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);


var myNumber = 10;
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);

//Task 6 - Square root
console.log('Task 6 - Square roots');

var a = 2;
var b = 5;
var c = -3;

var part1 = Math.sqrt(b * b - (4 * a * c));

var root1 = (-b + part1) / (2 * a);
var root2 = (-b - part1) / (2 * a);

if (isNaN(root1) && isNaN(root2)) {
    console.log('no real roots')
}
else {
    if (isNaN(root1)) {
        root1 = '';
    }
    if (isNaN(root2)) {
        root2 = '';
    }
    console.log(root1 + ' ' + root2);
}


//Rest of the example
var a = -1;
var b = 3;
var c = 0;

var part1 = Math.sqrt(b * b - (4 * a * c));

var root1 = (-b + part1) / (2 * a);
var root2 = (-b - part1) / (2 * a);

if (isNaN(root1) && isNaN(root2)) {
    console.log('no real roots')
}
else {
    if (isNaN(root1)) {
        root1 = '';
    }
    if (isNaN(root2)) {
        root2 = '';
    }
    console.log(root1 + ' ' + root2);
}


var a = -0.5;
var b = 4;
var c = -8;

var part1 = Math.sqrt(b * b - (4 * a * c));

var root1 = (-b + part1) / (2 * a);
var root2 = (-b - part1) / (2 * a);

if (isNaN(root1) && isNaN(root2)) {
    console.log('no real roots')
}
else {
    if (isNaN(root1)) {
        root1 = '';
    }
    if (isNaN(root2)) {
        root2 = '';
    }
    console.log(root1 + ' ' + root2);
}


var a = 5;
var b = 2;
var c = 8;

var part1 = Math.sqrt(b * b - (4 * a * c));

var root1 = (-b + part1) / (2 * a);
var root2 = (-b - part1) / (2 * a);

if (isNaN(root1) && isNaN(root2)) {
    console.log('no real roots')
}
else {
    if (isNaN(root1)) {
        root1 = '';
    }
    if (isNaN(root2)) {
        root2 = '';
    }
    console.log(root1 + ' ' + root2);
}

//Task 7 - The biggest of 5

console.log('Task 7 - The biggest of 5');

var a = 5;
var b = 2;
var c = 2;
var d = 4;
var e = 1;
var biggest;

if (a >= b) {
    if (a >= c) {
        if (a >= d) {
            if (a >= e) {
                biggest = a;
            }
        }
    }
}
if (b >= a) {
    if (b >= c) {
        if (b >= d) {
            if (b >= e) {
                biggest = b;
            }
        }
    }
}
if (c >= a) {
    if (c >= b) {
        if (c >= d) {
            if (c >= e) {
                biggest = c;
            }
        }
    }
}
if (d >= a) {
    if (d >= b) {
        if (d >= c) {
            if (d >= e) {
                biggest = d;
            }
        }
    }
}
if (e >= a) {
    if (e >= b) {
        if (e >= c) {
            if (e >= d) {
                biggest = e;
            }
        }
    }
}
console.log(biggest);


//The rest of the examples
var a = -2;
var b = -22;
var c = 1;
var d = 0;
var e = 0;
var biggest;


if (a >= b) {
    if (a >= c) {
        if (a >= d) {
            if (a >= e) {
                biggest = a;
            }
        }
    }
}
if (b >= a) {
    if (b >= c) {
        if (b >= d) {
            if (b >= e) {
                biggest = b;
            }
        }
    }
}
if (c >= a) {
    if (c >= b) {
        if (c >= d) {
            if (c >= e) {
                biggest = c;
            }
        }
    }
}
if (d >= a) {
    if (d >= b) {
        if (d >= c) {
            if (d >= e) {
                biggest = d;
            }
        }
    }
}
if (e >= a) {
    if (e >= b) {
        if (e >= c) {
            if (e >= d) {
                biggest = e;
            }
        }
    }
}
console.log(biggest);
var a = -2;
var b = 4;
var c = 3;
var d = 2;
var e = 0;


if (a >= b) {
    if (a >= c) {
        if (a >= d) {
            if (a >= e) {
                biggest = a;
            }
        }
    }
}
if (b >= a) {
    if (b >= c) {
        if (b >= d) {
            if (b >= e) {
                biggest = b;
            }
        }
    }
}
if (c >= a) {
    if (c >= b) {
        if (c >= d) {
            if (c >= e) {
                biggest = c;
            }
        }
    }
}
if (d >= a) {
    if (d >= b) {
        if (d >= c) {
            if (d >= e) {
                biggest = d;
            }
        }
    }
}
if (e >= a) {
    if (e >= b) {
        if (e >= c) {
            if (e >= d) {
                biggest = e;
            }
        }
    }
}
console.log(biggest);
var a = 0;
var b = -2.5;
var c = 0;
var d = 5;
var e = 5;
var biggest;

if (a >= b) {
    if (a >= c) {
        if (a >= d) {
            if (a >= e) {
                biggest = a;
            }
        }
    }
}
if (b >= a) {
    if (b >= c) {
        if (b >= d) {
            if (b >= e) {
                biggest = b;
            }
        }
    }
}
if (c >= a) {
    if (c >= b) {
        if (c >= d) {
            if (c >= e) {
                biggest = c;
            }
        }
    }
}
if (d >= a) {
    if (d >= b) {
        if (d >= c) {
            if (d >= e) {
                biggest = d;
            }
        }
    }
}
if (e >= a) {
    if (e >= b) {
        if (e >= c) {
            if (e >= d) {
                biggest = e;
            }
        }
    }
}
console.log(biggest);
var a = -3;
var b = -0.5;
var c = -1.1;
var d = -2;
var e = -0.1;
var biggest;

if (a >= b) {
    if (a >= c) {
        if (a >= d) {
            if (a >= e) {
                biggest = a;
            }
        }
    }
}
if (b >= a) {
    if (b >= c) {
        if (b >= d) {
            if (b >= e) {
                biggest = b;
            }
        }
    }
}
if (c >= a) {
    if (c >= b) {
        if (c >= d) {
            if (c >= e) {
                biggest = c;
            }
        }
    }
}
if (d >= a) {
    if (d >= b) {
        if (d >= c) {
            if (d >= e) {
                biggest = d;
            }
        }
    }
}
if (e >= a) {
    if (e >= b) {
        if (e >= c) {
            if (e >= d) {
                biggest = e;
            }
        }
    }
}
console.log(biggest);

//Task 8 - Numbers as words

var myNumber = 11;

var number = myNumber.toString();
var digit1 = number.charAt(number.length - 1);
var digit2 = number.charAt(number.length - 2);
var digit3 = number.charAt(number.length - 3);

var d1Name = '';
var d2Name = '';
var d3Name = '';

//Regular naming for hungreds
switch (digit3) {
    case '1': d3Name = 'One hundred'; break;
    case '2': d3Name = 'Two hundred'; break;
    case '3': d3Name = 'Three hundred'; break;
    case '4': d3Name = 'Four hundred'; break;
    case '5': d3Name = 'Five hundred'; break;
    case '6': d3Name = 'Six hundred'; break;
    case '7': d3Name = 'Seven hundred'; break;
    case '8': d3Name = 'Eight hundred'; break;
    case '9': d3Name = 'Nine hundred'; break;

}
//Regular naming for tens
switch (digit2) {
    case '2': d2Name = 'twenty'; break;
    case '3': d2Name = 'thirty'; break;
    case '4': d2Name = 'fourty'; break;
    case '5': d2Name = 'fifty'; break;
    case '6': d2Name = 'sixty'; break;
    case '7': d2Name = 'seventy'; break;
    case '8': d2Name = 'eighty'; break;
    case '9': d2Name = 'ninety'; break;
}
//Regular naming for digits
switch (digit1) {
    case '1': d1Name = 'one'; break;
    case '2': d1Name = 'two'; break;
    case '3': d1Name = 'three'; break;
    case '4': d1Name = 'four'; break;
    case '5': d1Name = 'five'; break;
    case '6': d1Name = 'six'; break;
    case '7': d1Name = 'seven'; break;
    case '8': d1Name = 'eight'; break;
    case '9': d1Name = 'nine'; break;
}
//Special conditions
if (myNumber === 0) {
    d1name = 'Zero';
    console.log(d1Name)
}

if (digit2 === '1') {
    d2Name = d1Name;
    d1Name = 'teen';
    switch (digit1) {
        case '3': d2Name = 'thir'; break;
        case '5': d2Name = 'fif'; break;
        case '8': d2Name = 'eigh'; break;
    }
    if (digit1 === '0') {
        d2Name = 'ten';
        d1Name = '';
    }
    if (digit1 === '1') {
        d2Name = 'eleven';
        d1Name = '';
    }
    if (digit1 === '0') {
        d2Name = 'twelve';
        d1Name = '';
    }
}
if (myNumber <= 999 && myNumber >0) {
 
    if (myNumber <= 99) {
        if (myNumber <=9) {
            d1Name = d1Name.charAt(0).toUpperCase() + d1Name.slice(1);
            console.log(d1Name);
        }
        else {
            d2Name = d2Name.charAt(0).toUpperCase() + d2Name.slice(1);

            if (digit2 === '1') {
                console.log(d2Name + d1Name);
            }
            else {
                console.log(d2Name + ' ' + d1Name);
            }
        }
    }
    else {
        if (d2Name === '0' && d1Name === '0') {
            console.log(d3Name);
        }
        else {
            console.log(d3Name + ' and ' + d2Name + ' ' + d1Name);
        }
    }
}
else {
    console.log('try with number 0 - 100');
}
