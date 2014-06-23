(function() {
    'use strict'
    Polymer('feedme-list-item', {
        //datasource: {},
        created: function() {
        //if object is an arry or object you must set default in created object rather than constructor
            this.datasource = {};
        },
        attached: function() {
            var dataSource = this.datasource;
            //format some data to more readable information
            dataSource.title = dataSource.title.replace('TED: ', '');
        },
        itemClick: function() {
            var feedItemDetails = document.querySelector('feedme-item-details');
            feedItemDetails.parseContent(this.datasource_);
        }
    });
})();
