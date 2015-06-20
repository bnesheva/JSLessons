//task 1

var myInteger = 1;

var myFloatingPoint = 1.234;

var myString = ' I am a string literal, ';

var myArray = ['Mercedes', 'BMW', 'Nissan'];

var myBoolean = true;

var myCar = { name: 'Mitsubishi', year: 2009};

//to print in the console

var task1 = 'Problem1: ' + myInteger + ' - I am an integer, ' + myFloatingPoint + ' - I am a floating-point literal, ' + myString + 'My array of car brands: ' + myArray[0] + ', ' + myArray[1] + ', ' + myArray[2] + ' and here is the object: ' + myCar.name + ', ' + myCar.year;

console.log(task1);

//task 2

var qotedText = '"How are you doing?" - Joe said.';

var task2 = 'Problem2: ' + qotedText;

console.log(task2);

//Task 3

var task3 = 'Problem3: ' + typeof myInteger + ', ' + typeof myFloatingPoint + ', ' + typeof myString + ', ' + typeof myArray + ', ' + typeof myBoolean + ', ' + typeof myCar + ', ' + typeof task1 + ', ' + typeof qotedText + ', ' + typeof task2;

console.log(task3);

//Task 4

var myUndefined;

var myNull = null;

var task4 = 'Problem 4: ' + myUndefined + ', ' + typeof myUndefined + ', ' + myNull + ', ' + typeof myNull;

console.log(task4);

