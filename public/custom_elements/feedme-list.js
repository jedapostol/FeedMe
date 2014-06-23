(function() {
    'use strict'
    Polymer('feedme-list', {
        ready: function() {
            var self = this;
            var jsonp = this.$.jsonp;
            jsonp.addEventListener('polymer-response', function(e) {
                self.parseData(this.response);
            });
            jsonp.go();
        },
        parseData: function(resp) {
            var self = this;
            if(resp.responseStatus === 200) {
                var data = resp.responseData;
                if('feed' in data && 'entries' in data.feed) {
                    var data = data.feed.entries;
                    if(data.length > 0) {
                        self.buildSideMenu(data);
                    } else {
                        //Warning, No response
                        console.log('Warning, No elements');
                    }
                }
            } else {
                //ERROR, Fetching data from data source
                console.log('Warning, Error fetching data');
            }
        },
        buildSideMenu: function(data) {
            var self = this;
            var $elm = self.$['feedme-list'];
            _(data).each(function(info) {
                var html = '',
                    tempElm = document.createElement('feedme-list-item');
                tempElm.datasource = info;
                $elm.appendChild(tempElm);
            });
        },
    });
})();
