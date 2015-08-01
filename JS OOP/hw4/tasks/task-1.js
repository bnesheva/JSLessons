/* Task Description */
/*
* Create an object domElement, that has the following properties and methods:
  * use prototypal inheritance, without function constructors
  * method init() that gets the domElement type
    * i.e. `Object.create(domElement).init('div')`
  * property type that is the type of the domElement
    * a valid type is any non-empty string that contains only Latin letters and digits
  * property innerHTML of type string
    * gets the domElement, parsed as valid HTML
      * <type attr1="value1" attr2="value2" ...> .. content / children's.innerHTML .. </type>
  * property content of type string
    * sets the content of the element
    * works only if there are no children
  * property attributes
    * each attribute has name and value
    * a valid attribute has a non-empty string for a name that contains only Latin letters and digits or dashes (-)
  * property children
    * each child is a domElement or a string
  * property parent
    * parent is a domElement
  * method appendChild(domElement / string)
    * appends to the end of children list
  * method addAttribute(name, value)
    * throw Error if type is not valid
  * method removeAttribute(attribute)
    * throw Error if attribute does not exist in the domElement
*/


/* Example
var meta = Object.create(domElement)
	.init('meta')
	.addAttribute('charset', 'utf-8');
var head = Object.create(domElement)
	.init('head')
	.appendChild(meta)
var div = Object.create(domElement)
	.init('div')
	.addAttribute('style', 'font-size: 42px');
div.content = 'Hello, world!';
var body = Object.create(domElement)
	.init('body')
	.appendChild(div)
	.addAttribute('id', 'cuki')
	.addAttribute('bgcolor', '#012345');
var root = Object.create(domElement)
	.init('html')
	.appendChild(head)
	.appendChild(body);
console.log(root.innerHTML);
Outputs:
<html><head><meta charset="utf-8"></meta></head><body bgcolor="#012345" id="cuki"><div style="font-size: 42px">Hello, world!</div></body></html>
*/


function solve() {
    function ordered(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }


    function createHTML() {
        var result = '<' + this.type;
        if (this.attributes.length > 0) {
            this.attributes.sort(ordered);
            var i, len = this.attributes.length;
            for (i = 0; i < len; i += 1) {
                result += ' ' + this.attributes[i].name + '="' + this.attributes[i].value + '"';
            }
        }
        result += '>';
        if (this.children.length > 0) {
            var j, len2 = this.children.length;
            for (j = 0; j < len2; j += 1) {
                if (typeof (this.children[j]) === 'string') {
                    result += this.children[j];
                }
                else {
                    result += this.children[j].innerHTML;
                }
            }
        }
        else if(this.content){
            result += this.content;
        }
        result += '</' + this.type + '>';

        return result;
    }



    var domElement = (function () {
        var domElement = {
            init: function (type) {
                this.type = type;
                this.attributes = [];
                this.children = [];
                this.parent;
                this.content;
                this.innerHTML;

                return this;
            },

            get type() {
                return this._type 
            },
            set type(value) {
                if (!((/^[a-zA-Z0-9]+$/).test(value)) || typeof value !== 'string') {
                    throw new Error ('Invalid type!');
                }
                this._type = value;
            },

            appendChild: function (child) {
                child.parent = this;
                this.children.push(child);

                return this;
            },

            addAttribute: function (name, value) {
                if (name.length === 0 || !((/^[a-zA-Z0-9-]+$/).test(name))) {
                    throw new Error('Invalid name!');
                }

                var attributeToAdd = {
                    name: name,
                    value: value
                }
                var i, toAdd = true, len = this.attributes.length;
                for (i = 0; i < len; i += 1) {
                    if (this.attributes[i].name === attributeToAdd.name) {
                        this.attributes[i].value = attributeToAdd.value;
                        toAdd = false
                    }

                }
                if (toAdd) {
                    this.attributes.push(attributeToAdd);
                }
                
                return this;
            },

            removeAttribute: function (attribute) {
                var nonexisting = true;
               // var attributeRemovvd,
               //     removing;
                this.attributes = this.attributes.filter(function (el) {
                    
                    if (el.name === attribute) {
                        nonexisting = false;
                    }
                   return el.name !== attribute;
                });
                if (nonexisting) {
                    throw new Error ('No such attribute!')
                }

                return this;
            },
            get innerHTML() {

                return createHTML.call(this);


            }
        };
        
        return domElement;
    }());
    return domElement;
}

module.exports = solve;