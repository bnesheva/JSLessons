/* globals $ */


function solve() {

    return function (selector) {
        var template =
            '<div class="container">' +
            '<h1>Animals</h1>' +
            '<ul class="animals-list">' +
                '{{#each animals}}' +
                    '<li>' +
                        '{{#if url}}' +
                            '<a href ="' + '{{this.url}}' + '">See a ' + '{{this.name}}' + '</a>' +
                        '{{else}}' +
                            '<a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">No link for ' + '{{this.name}}' + ', here is Batman!</a>' +
                        '{{/if}}' +
                    '</li>' +
                '{{/each}}' +
            '</ul>' +
            '</div>';

        $(selector).html(template);
    };
};

module.exports = solve;

/*
function solve2() {
    return function (selector) {
        var template = 
            '<div class="container">' +
            '<h1>Animals</h1>' +
            '<ul class="animals-list">' +
                '{{#each animals}}' +
                    '<li>' +
                        '{{#if url}}' +
                            '<a href ="' + '{{this.url}}' + '">See the ' + '{{this.name}}' + '</a>' +
                        '{{else}}' +
                            '<a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">No link for ' + '{{this.name}}' + ', here is Batman!</a>' +
                        '{{/if}}' +
                    '</li>' +
                '{{/each}}' +
            '</ul>' +
            '</div>';


        var tableTemplate = Handlebars.compile(template);
        var data = {
            animals: [{
                name: 'Lion',
                url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
            }, {
                name: 'Turtle',
                url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
            }, {
                name: 'Dog'              
            }, {
                name: 'Cat',
                url: 'http://i.imgur.com/Ruuef.jpg'
            }, {
                name: 'Dog Again'              
            }] 
        }

        template2 = tableTemplate(data);
        $(selector).html(template2);
    };
};


/////////////

//var result = template(data);

var func = solve2();
func('#main');
*/