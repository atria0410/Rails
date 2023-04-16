Rails.application.routes.draw do
  root "menus#index"

  resources :projects
end
