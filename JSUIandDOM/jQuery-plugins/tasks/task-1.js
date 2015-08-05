// JavaScript source code

function solve() {
    return function (selector) {
        var selected = $(selector);
        var mainDiv = $('<div />').addClass('dropdown-list');
        var i,
            newList,
            divCurrent,
            options,
            optionsLen,
            tempOption,
            newOptions = $(document.createDocumentFragment());

        selected.hide();
        selected.wrap(mainDiv);
        
        options = selected.children();
        //console.log(options);

        optionsLen = options.length;
        for (i = 0; i < optionsLen; i += 1) {
            tempOption = $('<div />')
                .addClass('dropdown-item')
                .attr('data-value', $(options[i]).val())
                .attr('data-index', i)
                .text('Option ' + (i+1));
            //console.log(tempOption);
            newOptions.append(tempOption);
            //console.log(newOptions)
        }
        divCurrent = $('<div/>').addClass('current').attr('data-value', '').text('Select value');
        newList = $('<div />').addClass('options-container').css({
            position: 'absolute',
            display: 'none'
        })
        $('.dropdown-list').append(divCurrent);
        $('.dropdown-list').append(newList);
        $('.options-container').append(newOptions);

        $('.current').on('click', function () {
            $('.options-container').show();
        });
        $('.dropdown-item').on('click', function () {
            var clicked = $(this);
            $('.current')
                .attr('data-value', clicked.attr('data-value'))
                .text(clicked.html());
            $('.options-container').hide();

            selected.val($(this).attr('data-value'));
            selected.attr('value', selected.val());

        });


    };
}

module.exports = solve;
