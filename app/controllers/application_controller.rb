class ApplicationController < ActionController::Base
  allow_browser versions: :modern

  before_action :set_locale

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options
    { locale: I18n.locale }
  end

  private

  def locale_valid?
    I18n.available_locales.include?(params[:locale]&.to_sym)
  end
end
