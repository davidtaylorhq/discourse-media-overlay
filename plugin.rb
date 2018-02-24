# name: Discourse Media Overlay
# about: Displays a 'popup' which can display media from posts
# version: 0.0.1
# authors: David Taylor

enabled_site_setting :media_overlay_enabled

PLUGIN_NAME ||= 'discourse-media-overlay'.freeze

register_asset 'stylesheets/media_overlay.scss'

after_initialize do

  AdminDashboardData.add_problem_check do
    I18n.t("media_overlay.move_to_theme")
  end

end
