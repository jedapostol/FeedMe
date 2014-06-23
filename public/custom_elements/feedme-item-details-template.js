(function() {
    'use strict'
    Polymer('feedme-item-details-template', {
        playVideo: function() {
            this.$['image-container'].innerHTML = '<video width="480" height="360" controls><source src="' + this.datasource.preview.url + '" type="video/mp4"></video>';
        }
    });
})();
