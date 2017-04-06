import Ember from 'ember';  
var inject = Ember.inject;

export default Ember.Component.extend({  
	service: inject.service('media-overlay-service'),

    collapsed: false,

    dockLeft: false,

    valueObserver: Ember.observer('service.content', function(sender, key, value, rev) {
	    this.set('collapsed', false);
  	}),

    init(){
    	this._super(...arguments);
    	this.set('dockLeft',this.siteSettings.media_overlay_dock_left);
    },

    didRender: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
        	this.$(".lazyYT").lazyYT();
    	});

    },

    actions: {
	    toggle: function() {
	      this.toggleProperty('collapsed');
	    },
	    close: function() {
	      this.get('service').set('open', false);
	    },
	    switchSides: function() {
	      this.toggleProperty('dockLeft');
	    }
  	},

  	additionalClasses: function() {
      
      if(this.get('dockLeft')){
        return 'dock-left'
      }else{
      	return 'dock-right'
      }
    }.property('dockLeft'),
});