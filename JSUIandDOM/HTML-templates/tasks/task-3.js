function solve() {
    return function () {
        $.fn.listview = function (data) {
            var i,
                len = data.length,
                $this = $(this),
                templateID = '#' + $this.attr('data-template'),
                template = $(templateID).html(),
                compiledTemplate = handlebars.compile(template);

            for (i = 0; i < len; i += 1) {
                $this.append(compiledTemplate(data[i]))
            }
        };
    };
}

module.exports = solve;
