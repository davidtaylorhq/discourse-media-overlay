import { withPluginApi, decorateCooked } from 'discourse/lib/plugin-api';

function addOverlays($elem) {
  $('iframe, video, .lazyYT', $elem).wrap("<div class='media-overlay-eligable'></div>")
  					.before("<button class='btn no-text control' onclick='window.mediaOverlayService.loadNew(this)'><i class='fa fa-expand' aria-hidden='true'></i></button>")
  					.wrap("<div class='content'></div>");
}

function initializeOverlays(api) {
  api.decorateCooked(addOverlays);
}

export default {
	name: "apply-media-overlay",
	initialize(container) {
		const siteSettings = container.lookup('site-settings:main');
		if (siteSettings.media_overlay_enabled) {
		  withPluginApi('0.5', initializeOverlays);
		}
	}
}
