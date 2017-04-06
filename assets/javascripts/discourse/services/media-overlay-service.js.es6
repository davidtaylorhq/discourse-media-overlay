import Ember from 'ember';

var inject = Ember.inject;

export default Ember.Service.extend({  

    content:"",

    open: false,

    init() {
        console.log("Media overlay service started");
        window.mediaOverlayService = this;
    },

    loadNew(object) {
        var contentToLoad = $(object).siblings('.content').first().html();
        this.set('content', "");
        this.set('content', contentToLoad);
        this.set('open', true);
    }


});