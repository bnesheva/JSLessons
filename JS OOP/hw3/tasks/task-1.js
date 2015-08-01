// JavaScript source code
/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:
	*	properties `firstname`, `lastname` and `age`
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
		*	age must always be a number in the range 0 150
			*	the setter of age can receive a convertible-to-number value
		*	if any of the above is not met, throw Error 		
	*	property `fullname`
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
			*	it must parse it and set `firstname` and `lastname`
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
	*	all methods and properties must be attached to the prototype of the Person
	*	all methods and property setters must return this, if they are not supposed to return other value
		*	enables method-chaining
*/
function solve() {
    var Person = (function () {
        function Person(firstname, lastname, age) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }

        return Person;
    }());

    var notValid = function (name) {
        if (name.length < 3 || name.length > 20 || !((/^[a-zA-Z]+$/).test(name))) {
            return true;
        }
    }

    Person.prototype.introduce = function () {
        return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age + '-years-old';
    }

    Object.defineProperty(Person.prototype, 'firstname', {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;

            if (notValid(value)) {
                throw new Error('invalid first name!');
            }

            return this;
        }

    })

    Object.defineProperty(Person.prototype, 'lastname', {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;

            if (notValid(value)) {
                throw new Error('invalid last name!');
            }

            return this;
        }

    })

    Object.defineProperty(Person.prototype, 'fullname', {
        get: function () {
            return this.firstname + ' ' + this.lastname;
        },
        set: function (namestr) {

            var names = namestr.split(' ');

            this.firstname = names[0];
            this.lastname = names[1];

            return this;
        }

    })



    Object.defineProperty(Person.prototype, 'age', {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;

            value = parseInt(value);

            if (value < 0 || value > 150 || isNaN(value)) {
                throw new Error('invalid age!');
            }

            return this;
        }

    })

    return Person;
}

//var p = new Person('J', 'Doe', 32);
//console.log(p.firstname);
//console.log(p.lastname);


module.exports = solve;