require(['gitbook', 'jQuery'], function(gitbook, $) {
    var init = function () {
        var title = $('title').text();
        title = title + " " + new Date()
        $('title').text(title);
    };

    gitbook.events.bind('page.change', function() {
        init();
    });
});