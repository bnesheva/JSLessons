// JavaScript source code

//Task 1 - Make Person
console.log('Task 1 - Make Person');

var fname,
    lname,
    years,
    gen,
    person;
function createPerson(fname, lname, years, gen) {
    if (gen === 'f') {
        gen = true;
    }
    else if (gen === 'm') {
        gen = false;
    }
    else {
        console.log('Wrong gender value!');
        return;
    }
    var person = {
        firstname:fname,
        lastname: lname,
        age: years,
        gender: gen
    }
    return person;
}
var firstNames = ['Pesho', 'Gosho', 'Pavkata', 'Jessica', 'Katia', 'Kalin', 'Vasil', 'Nesho', 'Ivan', 'Mariika'];
var lastNames = ['Mariikin', 'Mariikin', 'Ivanov', 'Symes', 'Aleksieva', 'Ivanov', 'Iliev', 'Vasilev', 'Ivanov', 'Peshova'];
var agesAll = [23, 48, 36, 23, 21, 23, 16, 23, 27, 32];
var gendersAll = ['m', 'm', 'm', 'f', 'f', 'm', 'm', 'm', 'm', 'f'];

var maPeople = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(function (_, i) {
    return createPerson(firstNames[i], lastNames[i], agesAll[i], gendersAll[i]);
});


console.log('These r ma People:');
console.log(JSON.stringify(maPeople));
console.log('I reuse this array for all the homeworks so if you want to change values, do it here')

//Task 2 - People of age
console.log('Task 2 - People of age');

//Using array from the first task :)

function ofAge(arr) {
    var result = arr.every(function (per, j) {
        //console.log(per);
        //console.log(per.age)
        return !(per.age < 18);
    })
    console.log('it is ' + result + ' that all these people are of age');
}
ofAge(maPeople);

//Task3 - Under Age
console.log('task 3 - under age')

function underAge(arr) {
    var result = arr.filter(function (per) {
        return !!(per.age < 18);
    })
    console.log(JSON.stringify(result));
    console.log(' are under age');
}
underAge(maPeople);

//Task 4 - Average Female Age

console.log('Task 4 - Average Female Age');

function averageAge(arr) {
    var females = arr.filter(function (per) {
        return (!!per.gender);
    });
    //console.log(females);
    var ages = 0;
    females.some(function (per) {
        //console.log('female age ' + per.age);
        ages += per.age;
    });
    console.log((ages/females.length) + ' is the average age of females');


}
averageAge(maPeople);

//Task 5 - youngest person 
console.log('Task 5 = youngest person');


if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}


var youngerAge = +Infinity,
    younger,
    per,
    result,
    arr;
function youngGuy(per) {
            if ((!(per.gender)) && (per.age < youngerAge)) {
                //console.log('found younger!');
                youngerAge = per.age;
                younger = per;
                //console.log('now younger age is ' + youngerAge);
                //console.log(JSON.stringify(younger));
            };
            result = (younger.firstname + ' ' + younger.lastname + ' is the youngest guy of ma people');
}
function youngest(arr) {
    var young = arr.find(youngGuy);
    console.log(result);

}
youngest(maPeople);



//Task 6 - group people 
console.log('Task 6 - Group people')

var char,
       p,
       firstChar,
       pers = [],
       arr1,
       charGroup = {};


function group(arr) {
    var result = arr.reduce(function (arr1, per) {
        char = ((per.firstname).charAt(0)).toLowerCase();
        if (charGroup.hasOwnProperty(char)) {
            charGroup[char].push(per);
        }
        else {
            charGroup[char] = pers;
            pers.push(per);
            //console.log(char);
            pers = [];
        }
    }, {})
    console.log(JSON.stringify(charGroup));
    //console.log(arr1);
}
group(maPeople);

