// JavaScript source code
//task 1
console.log('Task 1 - Planar coordinates');

var p1,
    p2,
    p3,
    xPlace,
    yPlace,
    point1,
    point2,
    distance,
    triangle,
    p,
    d1,
    a,
    b,
    c,
    d,
    f,
    d2,
    d3;

function coordinates(a, b, c, d, e, f) {
    //here you add values
    console.log('adding vatues to points: ' + a + ', ' + b + ', ' + c + ', ' + d + ', ' + e + ', ' + f)
    function makePoint(xPlace, yPlace) {
        var p = {
            x: xPlace,
            y: yPlace
        };
        return p;
    }
    var p1 = makePoint(a, b),
        p2 = makePoint(c, d),
        p3 = makePoint(e, f);
    console.log('Now the 3 points are: p1 (' + p1.x + ', ' + p1.y + '), p2 (' + p2.x + ', ' + p1.y + '), p3 (' + p3.x + ', ' + p3.y + ')');
    // Now the distances

    function findDistance(point1, point2) {
        distance = Math.sqrt(((point2.x - point1.x) * (point2.x - point1.x)) + ((point2.y - point1.y) * (point2.y - point1.y)));
        return distance;
    }
    function distances() {
        d1 = findDistance(p1, p2);
        d2 = findDistance(p2, p3);
        d3 = findDistance(p1, p3);
        console.log('the distances between point are ' + d1 + ', ' + d2 + ', ' + d3);
    }
    distances();

    //now triangle
    if (((d1+d2) > d3) || ((d1+d3) > d2) || ((d3+d2) > d1)) {
        console.log('These lines can form triangle');
    }
    else {
        console.log('These lines would never form triangle');
    }
}

coordinates(2, 4, 5, 6, 7, 8);

//Task 2 - Remove element
console.log('Task2 - Remove Element');

console.log('this is the function')
var arr,
    len,
    i,
    toRemove;

function remove(toRemove, arr) {
    console.log('to remove ' + toRemove + ' out of ' + arr);
    len = arr.length;
    for (i = 0; i < len; i += 1) {
        if (arr[i] === toRemove) {
            arr.splice(i, 1);
        }
    }
    console.log('arr is ' + arr);
    return arr;
}
remove(3, [1, 2, 3, 5, 3, 4, 5, 3]);

//================================
console.log('and this is the attached method')
Array.prototype.remove = function (toRemove) {
    var len,
        i,
        toRemove;
    len = this.length;
    for (i = 0; i < len; i += 1) {
        if (this[i] === toRemove) {
            this.splice(i, 1);
        }
    }
    return this;
}

var arr = [1, 2, 3, 5, 3, 4, 5, 3];
arr.remove(3);
console.log(arr);

//Task 3 - Deep copy
console.log('Task 3 - Deep copy');
var InitObj = { a: 1, b: 2 },
    NextObj;

function deepCopy(toCopy) {
    var result;
    result = Object.create(toCopy);
    return result;
}
NextObj = deepCopy(InitObj);


console.log('My first object has properties a: ' + InitObj.a + ' and b: ' + InitObj.b + '. I created NextObj as a deep copy, with a: ' + NextObj.a + ' and b: ' + NextObj.b);

NextObj.a = 'is chnanged';


console.log('Now the NextObj properties are a: ' +NextObj.a + ' and the initial object a is ' + InitObj.a);


//Task 4 - Has property
console.log('Task 4 - Has property')
var obj,
    toFind;
function hasProperty(obj, toFind) {
    if(toFind in obj) {
        console.log('This object has property "' + toFind +'"');
    }
    else {
        console.log('This object does not have property "' + toFind +'"');
    }
}
var searchObj = {
    a: 1,
    b: 2,
    c: 3
};
console.log('Now lets check');
console.log(searchObj);
console.log('for property with key "d"');
hasProperty(searchObj, 'd');

//Task 5 - Youngest person
var arr;
var people = [
  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Mariika', lastname: 'Stefanova', age: 35 }
];
function youngestPerson(arr) {
    var i,
        len = arr.length,
        youngest = 0,
        leastAge = +Infinity;
    for (i = 0; i < len; i += 1) {
        if (arr[i].age < leastAge) {
            leastAge = arr[i].age;
            youngest = i;
        }
    }
    console.log(people[youngest].firstname + ' ' + people[youngest].lastname + ' is youngest');
}
youngestPerson(people);

//Task 6 - Group people



var arr;
var people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 35 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Mariika', lastname: 'Stefanova', age: 35 },
  { firstname: 'Ania', lastname: 'Stefanova', age: 35 },
  { firstname: 'Goshko', lastname: 'Mariikin', age: 35 }
];
function group(arr, criteria) {
    var i,
        j,
        k,
        l,
        toAdd,
        ageGroup = [],
    firstnameGroup = [],
        len = arr.length;
        for (i = 0; i < len; i += 1) {
            for (j = 0; j < arr.length; j += 1) {
                if (criteria === 'age') {
                    //If its age you are looking for
                    if ((arr[i].age === arr[j].age) && j !== i) {
         //               console.log('found matching age');
           //             console.log(arr[j]);
                        if (ageGroup.length === 0) {
                            ageGroup.push(arr[j]);
                        }
                        else {
                            for (k = 0; k < ageGroup.length; k += 1) {
             //                   console.log('checking duplications');
                                if (ageGroup[k] === arr[j]) {
                                    toAdd = false;
               //                     console.log('exists');
                                    break;
                                }
                                else {
                                    toAdd = true;
                                }
                            }
                        }
                        if (toAdd === true) {
                            ageGroup.push(arr[j]);
                        }
                    }
                    console.log('the age grouping is');
                    console.log(ageGroup);
                    //Compared the age, enough of this
                }
                if (criteria === 'lastname') {
                    //If its lastname you are looking for
                    if ((arr[i].lastname === arr[j].lastname) && j !== i) {
                        //               console.log('found matching lastname');
                        //             console.log(arr[j]);
                        if (lastnameGroup.length === 0) {
                            lastnameGroup.push(arr[j]);
                        }
                        else {
                            for (k = 0; k < lastnameGroup.length; k += 1) {
                                //                   console.log('checking duplications');
                                if (lastnameGroup[k] === arr[j]) {
                                    toAdd = false;
                                    //                     console.log('exists');
                                    break;
                                }
                                else {
                                    toAdd = true;
                                }
                            }
                        }
                        if (toAdd === true) {
                            lastnameGroup.push(arr[j]);
                        }
                    }
                    console.log('the lastname grouping is');
                    console.log(lastnameGroup);
                    //Compared the lastname, enough of this
                }
                if (criteria === 'firstname') {
                    //If its firstname you are looking for
                    if ((arr[i].firstname === arr[j].firstname) && j !== i) {
                        //               console.log('found matching firstname');
                        //             console.log(arr[j]);
                        if (firstnameGroup.length === 0) {
                            firstnameGroup.push(arr[j]);
                        }
                        else {
                            for (k = 0; k < fistnameGroup.length; k += 1) {
                                //                   console.log('checking duplications');
                                if (firstnameGroup[k] === arr[j]) {
                                    toAdd = false;
                                    //                     console.log('exists');
                                    break;
                                }
                                else {
                                    toAdd = true;
                                }
                            }
                        }
                        if (toAdd === true) {
                            firstnameGroup.push(arr[j]);
                        }
                    }
                    console.log('the firstname grouping is');
                    console.log(firstnameGroup);
                    //Compared the firstname, enough of this
                }
        }
    }
}
// JavaScript source code
//task 1
console.log('Task 1 - Planar coordinates');

var p1,
    p2,
    p3,
    xPlace,
    yPlace,
    point1,
    point2,
    distance,
    triangle,
    p,
    d1,
    a,
    b,
    c,
    d,
    f,
    d2,
    d3;

function coordinates(a, b, c, d, e, f) {
    //here you add values
    console.log('adding vatues to points: ' + a + ', ' + b + ', ' + c + ', ' + d + ', ' + e + ', ' + f)
    function makePoint(xPlace, yPlace) {
        var p = {
            x: xPlace,
            y: yPlace
        };
        return p;
    }
    var p1 = makePoint(a, b),
        p2 = makePoint(c, d),
        p3 = makePoint(e, f);
    console.log('Now the 3 points are: p1 (' + p1.x + ', ' + p1.y + '), p2 (' + p2.x + ', ' + p1.y + '), p3 (' + p3.x + ', ' + p3.y + ')');
    // Now the distances

    function findDistance(point1, point2) {
        distance = Math.sqrt(((point2.x - point1.x) * (point2.x - point1.x)) + ((point2.y - point1.y) * (point2.y - point1.y)));
        return distance;
    }
    function distances() {
        d1 = findDistance(p1, p2);
        d2 = findDistance(p2, p3);
        d3 = findDistance(p1, p3);
        console.log('the distances between point are ' + d1 + ', ' + d2 + ', ' + d3);
    }
    distances();

    //now triangle
    if (((d1 * d1) + (d2 * d2) === (d3 * d3)) || ((d1 * d1) + (d3 * d3) === (d2 * d2)) || ((d2 * d2) + (d3 * d3) === (d1 * d1))) {
        console.log('These lines can form triangle');
    }
    else {
        console.log('These lines would never form triangle');
    }
}

coordinates(2, 4, 5, 6, 7, 8);

//Task 2 - Remove element
console.log('Task2 - Remove Element');

console.log('this is the function')
var arr,
    len,
    i,
    toRemove;

function remove(toRemove, arr) {
    console.log('to remove ' + toRemove + ' out of ' + arr);
    len = arr.length;
    for (i = 0; i < len; i += 1) {
        if (arr[i] === toRemove) {
            arr.splice(i, 1);
        }
    }
    console.log('arr is ' + arr);
    return arr;
}
remove(3, [1, 2, 3, 5, 3, 4, 5, 3]);

//================================
console.log('and this is the attached method')
Array.prototype.remove = function (toRemove) {
    var len,
        i,
        toRemove;
    len = this.length;
    for (i = 0; i < len; i += 1) {
        if (this[i] === toRemove) {
            this.splice(i, 1);
        }
    }
    return this;
}

var arr = [1, 2, 3, 5, 3, 4, 5, 3];
arr.remove(3);
console.log(arr);

//Task 3 - Deep copy
console.log('Task 3 - Deep copy');
var InitObj = { a: 1, b: 2 },
    NextObj;

function deepCopy(toCopy) {
    var result;
    result = Object.create(toCopy);
    return result;
}
NextObj = deepCopy(InitObj);


console.log('My first object has properties a: ' + InitObj.a + ' and b: ' + InitObj.b + '. I created NextObj as a deep copy, with a: ' + NextObj.a + ' and b: ' + NextObj.b);

NextObj.a = 'is chnanged';


console.log('Now the NextObj properties are a: ' +NextObj.a + ' and the initial object a is ' + InitObj.a);


//Task 4 - Has property
console.log('Task 4 - Has property')
var obj,
    toFind;
function hasProperty(obj, toFind) {
    if(toFind in obj) {
        console.log('This object has property "' + toFind +'"');
    }
    else {
        console.log('This object does not have property "' + toFind +'"');
    }
}
var searchObj = {
    a: 1,
    b: 2,
    c: 3
};
console.log('Now lets check');
console.log(searchObj);
console.log('for property with key "d"');
hasProperty(searchObj, 'd');

//Task 5 - Youngest person
console.log('Task 5 - Youngest person')
var arr;
var people = [
  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Mariika', lastname: 'Stefanova', age: 35 }
];
function youngestPerson(arr) {
    var i,
        len = arr.length,
        youngest = 0,
        leastAge = +Infinity;
    for (i = 0; i < len; i += 1) {
        if (arr[i].age < leastAge) {
            leastAge = arr[i].age;
            youngest = i;
        }
    }
    console.log(people[youngest].firstname + ' ' + people[youngest].lastname + ' is youngest');
}
youngestPerson(people);

//Task 6 - Group people
console.log('Task 6 = grouping people')



var arr;
var people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 35 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Mariika', lastname: 'Stefanova', age: 35 },
  { firstname: 'Ania', lastname: 'Stefanova', age: 35 },
  { firstname: 'Gosho', lastname: 'Mariikin', age: 35 }
];
function group(arr, criteria) {
    var i,
        j,
        k,
        l,
        toAdd,
        ageGroup = [],
    firstnameGroup = [],
    lastnameGroup = [],
        len = arr.length;
    if (criteria === 'age') {
        //If its age you are looking for
        for (i = 0; i < len; i += 1) {
            for (j = 0; j < arr.length; j += 1) {
                if ((arr[i].age === arr[j].age) && j !== i) {
                    //               console.log('found matching age');
                    //             console.log(arr[j]);
                    if (ageGroup.length === 0) {
                        ageGroup.push(arr[j]);
                    }
                    else {
                        for (k = 0; k < ageGroup.length; k += 1) {
                            //                   console.log('checking duplications');
                            if (ageGroup[k] === arr[j]) {
                                toAdd = false;
                                //                     console.log('exists');
                                break;
                            }
                            else {
                                toAdd = true;
                            }
                        }
                    }
                    if (toAdd === true) {
                        ageGroup.push(arr[j]);
                    }
                }
            }
        }
        console.log('the age grouping is');
        console.log(ageGroup);
        return ageGroup;
    }
    //Compared the age, enough of this
            if (criteria === 'lastname') {
                //If its lastname you are looking for
                for (i = 0; i < len; i += 1) {
                    for (j = 0; j < arr.length; j += 1) {
                if ((arr[i].lastname === arr[j].lastname) && j !== i) {
                    //               console.log('found matching lastname');
                    //             console.log(arr[j]);
                    if (lastnameGroup.length === 0) {
                        lastnameGroup.push(arr[j]);
                    }
                    else {
                        for (k = 0; k < lastnameGroup.length; k += 1) {
                            //                   console.log('checking duplications');
                            if (lastnameGroup[k] === arr[j]) {
                                toAdd = false;
                                //                     console.log('exists');
                                break;
                            }
                            else {
                                toAdd = true;
                            }
                        }
                    }
                    if (toAdd === true) {
                        lastnameGroup.push(arr[j]);
                    }
                }
            }
                }
                console.log('the lastname grouping is');
                console.log(lastnameGroup);
                return lastnameGroup;
    }
                    //Compared the lastname, enough of this
    if (criteria === 'firstname') {
        //If its firstname you are looking for
        for (i = 0; i < len; i += 1) {
            for (j = 0; j < arr.length; j += 1) {
                if ((arr[i].firstname === arr[j].firstname) && j !== i) {
                    //               console.log('found matching firstname');
                    //             console.log(arr[j]);
                    if (firstnameGroup.length === 0) {
                        firstnameGroup.push(arr[j]);
                    }
                    else {
                        for (k = 0; k < firstnameGroup.length; k += 1) {
                            //                   console.log('checking duplications');
                            if (firstnameGroup[k] === arr[j]) {
                                toAdd = false;
                                //                     console.log('exists');
                                break;
                            }
                            else {
                                toAdd = true;
                            }
                        }
                    }
                    if (toAdd === true) {
                        firstnameGroup.push(arr[j]);
                    }
                }
            }
        }
        console.log('the firstname grouping is');
        console.log(firstnameGroup);
        return firstnameGroup;
    }
                    //Compared the firstname, enough of this
    }
var groupedByFname = group(people, 'firstname');
var groupedByAge = group(people, 'age');
var groupedByLname = group(people, 'lastname');
function makeGrouping() {
    var result = {
        'GroupedByFname': groupedByFname,
        'GroupedByLname': groupedByLname,
        'GroupedByAge': groupedByAge,
    }
return result;
}
console.log(makeGrouping());