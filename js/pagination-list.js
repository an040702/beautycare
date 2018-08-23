$('#pagination').pagination({
    dataSource: [1],
    pageSize: 5,
    showPrevious: false,
    showNext: false,
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})