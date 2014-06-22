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
            // var $elm = self.$['feedme-list-master-container'];
            // var html = '<polymer-ui-sidebar-menu selected="0" id="side-menu" label="Ted Talks">';
            // _(data).each(function(info) {
            //     //format data before sending to template, its also faster to escape strings here than it is in templates
            //     html += self.menuItemTemplate({
            //         title: _.escape(info.title.replace('TED: ', '')),
            //         preview: _.escape(info.contentSnippet),
            //         author: info.author,
            //         categories: info.categories,
            //         href: info.link,
            //         data: info
            //     });
            // });
            // html += '</polymer-ui-sidebar-menu>';
            var $elm = self.$['feedme-list-master-container'];
            var polymerSideMenu = document.createElement('polymer-ui-sidebar-menu');
            polymerSideMenu.id = 'side-menu';
            polymerSideMenu.setAttribute('label', 'Ted Talks');
            _(data).each(function(info) {
                var tempElm = document.createElement('feedme-list-item');
                tempElm.setAttribute('label', info.title);
                tempElm.setAttribute('is', 'feedme-list-item');
                polymerSideMenu.appendChild(tempElm);
            });
            $elm.appendChild(polymerSideMenu)
        }
    });
})();
