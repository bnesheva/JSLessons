// JavaScript source code
//Task 1 - Reverse string
console.log('Task 1 - Reverse string')
function reverse(str) {
    var i,
        len = str.length,
        result = '';
    for (i = len - 1; i >= 0; i -= 1) {
        result = result + str.charAt(i);
    }
    console.log('You enterd "' + str + '" and now you get "' + result + '"');
}
reverse('sample');

//Task 2 - Correct brackets 
console.log('Task 2 - Correct brackets');
function brackets(str) {
    var i,
        len = str.length,
        bracketCount = 0;
    if ((str.indexOf('(') < 0) && (str.indexOf(')') < 0)) {
        console.log(str + ' has no brackets in the string!');
        return false;
        //break;
    }
    for (i = 0; i < len; i += 1) {
        if (str[i] === '(') {
            //console.log('opening bracket found');
            bracketCount += 1;
        }
        else if (str[i] === ')') {
            //console.log('closing bracket found');
            bracketCount -= 1;
        }
        if (bracketCount < 0) {
            console.log(str + ' has incorrect brackets!');
            return false;
            break;
        }
    }
    console.log(bracketCount);
    if (bracketCount === 0) {
        console.log('Correct brakcets in ' + str + '! Well done!');
        return true;
    }
    else {
        console.log(str + ' has incorrect brackets');
        return false;
    }
}
brackets('dskjfn())');

//Task 3 - Sub-string test
console.log('Task 3 - Sub-string test');
var str,
    reg,
    len,
    len1,
    count = 0,
    toFind;
function substring(str, toFind) {
    str = str.toLowerCase();
    toFind = toFind.toLowerCase();
    len = str.length;
    len1 = toFind.length;
    for (i = 0; i < len - len1; i += 1) {
        if (str.substr(i, len1) === toFind) {
            count += 1;
        }
    }
    console.log('The substring "' + toFind + '" appears ' + count + ' times in the text "' + str + '"')
}
substring("We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.", 'in');

//Task 4 - Parse tags
console.log('Task 4 - Parse tags');

function parseTag(str) {
    var str,
        i,
        j,
        k,
        stopper,
        strTemp = '',
        result = '',
        len = str.length;
    for (i = 0; i < len; i += 1) {
        //console.log(str[i]);
        if ((str[i] === '<') && (str.substr(i + 1, 8) === 'mixcase>')) {
                i += 9;
                while (str[i] !== '<') {
                    if (Math.round(Math.random())) {
                        result = result + str[i].toUpperCase();
                    }
                    else {
                        result = result + str[i].toLowerCase();
                    }
                    i += 1;
                }
        }
        if ((str[i] === '<') && (str.substr(i + 1, 9) === '/mixcase>')) {
            i += 9;
        }
            //Now lowcase
        if ((str[i] === '<') && (str.substr(i + 1, 8) === 'lowcase>')) {
            i += 9;
            //console.log('i is ' + i + ' and letter is ' + str[i]);
            while (str[i] !== '<') {
                result = result + str[i].toLowerCase();
                i += 1;
            }
        }
        if ((str[i] === '<') && (str.substr(i + 1, 9) === '/lowcase>')) {
            i += 9;
            //console.log('i is ' + i + ' and letter is ' + str[i]);
        }
        //Now upcase
        if ((str[i] === '<') && (str.substr(i + 1, 7) === 'upcase>')) {
            i += 8;
            //console.log('i is ' + i + ' and letter is ' + str[i]);
            while (str[i] !== '<') {
                result = result + str[i].toUpperCase();
                i += 1;
            }
        }
        if ((str[i] === '<') && (str.substr(i + 1, 8) === '/upcase>')) {
            i += 8;
            //console.log('i is ' + i + ' and letter is ' + str[i]);
        }

        else {
            result = result + str[i];
        }

    }
    console.log(str);
    console.log(result);
    }

parseTag("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.");


//Task 5 - nbsp 

console.log('Task 5 - nbsp');

var str,
    result = '',
    temp,
    i;
function nbsp(str) {
    temp = str.split(' ');
    console.log(temp);
    temp.forEach(function (ind) {
        result = result +'&nbsp' + ind;
    });
    console.log(str + '/// is turned into:')
    console.log(result)
}

nbsp('how are you');

//Taks 6 - Extract text from HTML

var extracted = '',
    len,
    i;

function extract(html) {
    len = html.length;
    for (i = 0; i < len; i += 1) {
        if (html[i] === '<') {
            while (html[i] !== '>') {
                i += 1;
            }
        }
        else {
            extracted += html[i];
        }
    }
    console.log(extracted);
}


//var page = document.documentElement.innerHTML;
//console.log('this is the text from current HTML page' );


//extract(page);


extract("<html> <head> <title>Sample site</title> </head> <body> <div>text <div>more text</div> and more...</div>in body</body></html>");

//Taks 7 - Parse URL
console.log('Task 7 - Parse URL')

function parseURL(url) {
    var protocolT = '',
        serverT = '',
        resourceT = '',
        i = 0,
        len = url.length,
        pars,
        obj;
    while (url.substr(i, 3) !== '://') {
        protocolT += url[i];
        i += 1;
    }
        //console.log(protocolT);
        i += 3;
        while (url[i] !== '/') {
        serverT += url[i];
        i += 1;
        }
        //console.log(serverT);
        i += 1;
        while (i < len) {
            resourceT += url[i];
            i += 1;
        }
        //console.log(resourceT);
        obj = {
            protocol: protocolT,
            server: serverT,
            resource: resourceT
        }
        console.log(JSON.stringify(obj));
}
parseURL('http:// telerikacademy.com/Courses/Courses/Details/239');


//Task 8 Replace tags
console.log('Task 8 - Replace tags');

function replaceTag(str) {
    var i,
        changed = '',
        len = str.length;
    for (i = 0; i < len; i +=1) {
        // console.log('i is ' + i + ' and ' + str[i]);
        if (str.substr(i, 9) === '<a href="') {
            i += 9;
            changed += '[URL:';
            while ((str[i] !== '>') && (i<len)) {
                //console.log('ok');
                changed += str[i];
                i += 1;
            }
            changed += ']';

        }
        if (str.substr(i, 4) === '</a>') {
            i += 4;
            changed += '[/URL]';
        }
        else {
            changed += str[i];
        }
    }
    console.log(changed);
}

replaceTag('<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>');

//Task 9 - extract emails
console.log('Task 9 - extract emails');

function emails(str) {
    var words = str.split(' '),
        maillist = [];
    //console.log(words);
    words.forEach(function (word, i) {
        //console.log(word + ' ' + i);
        if (word.indexOf('@') >=0){
            maillist.push(word);
        }
    });
    console.log(JSON.stringify(maillist));
}

emails('something email@test.com and more and one more mail@something.eu');

//Task 10


function palindromes(str) {
    var result = [],
        arr,
        i;
    arr = str.split(/[\s,".]+/);
    for (i in arr) {
        if (arr[i].split('').reverse().join('') === arr[i]) {
            if (arr[i].length !== 1 && arr[i].length !== 0) {
                result.push(arr[i]);
            }
        }
    }
    console.log(result);
}

palindromes('Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".') 

//Task 11 - placeholders
console.log('Taks 11 - placeholders');

var str = stringFormat('Hello {0}! Now , this is {1}', 'Peter', 'Mitko');
console.log(str);

function stringFormat() {

    var regexForStringPlaceholder = /{[0-9]{1,}}/g,
        arrNew = [],
        indSt = '',
        digits = 0,
        currentVarToChange = '',
        switcher = 0,
        tempTaker = '',
        finalOutPut = '',
        currentNum = 0;

    for (var loops = 0; loops < arguments.length; loops += 1) {
        arrNew.push(arguments[loops]);
    }
    var theString = arrNew[0];

    for (var switcher = 0; switcher < theString.length; switcher += 1) {
        if (theString[switcher] == '{' && (!isNaN(theString[switcher + 1]))) {
            for (var p = switcher + 1; p < theString.length; p += 1) {
                if (theString[p] == '}') {
                    currentNum = parseInt(tempTaker);
                    finalOutPut += arrNew[currentNum + 1];
                    switcher = switcher + currentNum.toString().length + 2;
                    tempTaker = '';
                    break;
                }
                else {
                    tempTaker += theString[p];
                }
            }
        }
        else {
            finalOutPut += theString[switcher];
        }
    }
    return finalOutPut;
}



//Task 12 - generate HTML
console.log('Task 12 - generate HTML - see the page!');



function createPerson (name, age){
    var person = {
        name: name,
        age: age
    }
 //   console.log(person);
    return person;
}
//createPerson('Niki', 34);
var nameAll = ['Pesho', 'Gosho', 'Mariika'],
    ageAll = [23, 76, 2],
    people = [1, 1, 1].map(function (_, i) {
        return createPerson(nameAll[i], ageAll[i]);
    });
//console.log(people);
var template = '<strong>-{name}-</strong> <span>-{age}-</span>';
function generateList(ppl, tmp) {
    var part1 = tmp.split('-{name}-')[0],
        list = '',
        rest = tmp.split('-{name}')[1],
        part2 = rest.split('-{age}-')[0];
    rest = rest.split('-{age}-')[1];
    //console.log(part1);
    //console.log(part2);
    //console.log(rest);
    ppl.forEach(function (per, i) {
        list = list + part1 + per.name + part2 + per.age + rest;
        //console.log('show me per');
        //console.log(per);
    });
    console.log(list);
    return list;
 
}
function change() {
    //console.log('change started')
    var peopleList = generateList(people, template);
    //var tmpl = document.getElementById('list-item').innerHtml;
    document.getElementById('list-item').innerHTML = peopleList;
}
window.onload = setTimeout(function(){change() }, 2000);



