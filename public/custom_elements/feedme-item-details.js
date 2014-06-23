(function() {
    'use strict'
    Polymer('feedme-item-details', {
        parseContent: function(info) {
            var parsedData = {
                title: info.title,
                date: info.publishedDate,
                author: info.author,
                link: info.link,
                //content must be parsed, since the source contains html, polymer cannot insert html using expressions, as it is escaped.
                content: info.content.substring(0, info.content.indexOf('<img src')),
                categories: info.categories.toString(),
                preview: ((info.mediaGroups.length > 0 && info.mediaGroups[0].contents.length > 0) ? info.mediaGroups[0].contents[0] : {})
            };
            var tempElm = document.createElement('feedme-item-details-template');
            tempElm.datasource = parsedData;
            this.$['feedme-item-details'].innerHTML = '';
            this.$['feedme-item-details'].appendChild(tempElm)
        }
    });
})();
