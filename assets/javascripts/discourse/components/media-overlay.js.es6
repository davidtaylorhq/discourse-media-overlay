import Ember from 'ember';  
var inject = Ember.inject;

export default Ember.Component.extend({  
	service: inject.service('media-overlay-service'),

    collapsed: false,

    valueObserver: Ember.observer('service.content', function(sender, key, value, rev) {
	    this.set('collapsed', false);
  	}),

    didRender: function() {
    	console.log("Did insert element");
        Ember.run.scheduleOnce('afterRender', this, function() {
        	this.$(".lazyYT").lazyYT();
        	console.log("Did render");
    	});

    },

    actions: {
	    toggle: function() {
	      this.toggleProperty('collapsed');
	    },
	    close: function() {
	      this.get('service').set('open', false);
	    }
  	}
});