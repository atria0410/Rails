class ApplicationController < ActionController::Base
  before_action :add_initial_breadcrumbs

  private

  def add_initial_breadcrumbs
    breadcrumbs.add :home, root_path
  end
end
