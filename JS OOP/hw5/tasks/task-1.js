/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {

    function checkTitle(str) {
        if (typeof(str) !== 'string' || (/^\s|\s$/).test(str) || (/[ ]{2,}/).test(str) || (str.length < 1)) {
            throw new Error('invalid title!')
        }

        //return title
    }

    function checkPresentationTitles(arr) {
        var i,
            len = arr.length;
        if (len < 1) {
            throw new Error('There are no presentations!');
        }
        for (i = 0; i < len; i += 1) {
            checkTitle(arr[i]);
        }
    }
    function checkName(str) {
        var names = str.split(' '),
            first = names[0],
            second = names[1];
        if (typeof (str) !== 'string' || names.length !== 2) {
            throw new Error('invalid names!');
        }
        if (first.length === 1) {
            if (!((/^[A-Z]+$/).test(first))) {
                throw new Error('invalid first name!');
            }
        }
        else {
            if (!((/^[A-Z]+[a-z]+$/).test(first))) {
                throw new Error('invalid first name long!');
            }
        }
        if (second.length === 1) {
            if (!((/^[A-Z]+$/).test(second))) {
                throw new Error('invalid first name!');
            }
        }
        else {
            if (!((/^[A-Z]+[a-z]+$/).test(second))) {
                throw new Error('invalid first name long!');
            }
        }
        return names
    }

        



    var Course = {

        init: function (title, presentations) {
            //Course title
            checkTitle(title);
            this.title = title;

            //Presentation titles
            checkPresentationTitles(presentations);
            this.presentations = presentations;

            //students
            this.students = [];

            return this;
        },
        addStudent: function (name) {
            var studentID = this.students.length + 1;

            checkName(name);
            var names = name.split(' ');
            this.students.push({
                firstname : names[0],
                lastname: names[1],
                id: studentID
            });

            
            return studentID;
        },
        getAllStudents: function () {
            return this.students.slice();
        },
        submitHomework: function (studentID, homeworkID) {
            if (studentID < 1 || studentID > this.students.length) {
                throw new Error('Invalid student ID')
            }
            if (homeworkID < 1 || homeworkID > this.presentations.length) {
                throw new Error('Invalid homework ID')
            }

        },
        pushExamResults: function (results) {
            var i,
                j,
                k,
                l,
                //toZero = true,
               // scoreTemp = 0,
                len = results.length,
                len2 = this.students.length;
            //validate results

            if(!( Object.prototype.toString.call( results ) === '[object Array]' )) {
                throw new Error('Wrong results!');
            }

            
            for (k = 0; k < len; k += 1) {
                if (results[k].StudentID < 1 || results[k].StudentID > len2 || isNaN(results[k].StudentID)) {
                    throw new Error('wrong student ID in results!');
                }
                if (!(results[k].score)) {
                    throw new Error('no score in results!');
                }
                for (l = 0; l < len; l += 1) {
                    if ((results[l].StudentID === results[k].StudentID) && (l !== k)) {
                        throw new Error('We have a cheater!')
                    }
                }
            }


            for (i = 0; i < len2; i += 1) {
                this.students[i].score = 0;
                for (j = 0; j < len; j += 1) {
                    if (results[j].StudentID === this.students[i].id) {
                        this.students[i].score = results[j].score;
                    }
                }
            }
        },
        getTopStudents: function () {
        }
    };

    return Course;
}


module.exports = solve;


