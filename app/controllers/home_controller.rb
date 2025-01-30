class HomeController < ApplicationController
  def index
    render inertia: "Home", props: {
      currentLocale: params.fetch(:locale, I18n.locale),
      translations: {
        nav: {
          home: t("nav.home"),
          experience: t("nav.experience"),
          projects: t("nav.projects"),
          contact: t("nav.contact")
        },
        home: {
          title: t("home.title"),
          description: t("home.description"),
          contact_button: t("home.contact_button")
        },
        experience: {
          title: t("experience.title"),
          items: t("experience.items")
        },
        projects: {
          title: t("projects.title"),
          items: t("projects.items")
        },
        footer: {
          copyright: t("footer.copyright")
        }
      }
    }
  end

  def change_locale
    locale = params[:locale]
    redirect_back(fallback_location: root_path, locale: locale) if locale_valid?
  end
end
