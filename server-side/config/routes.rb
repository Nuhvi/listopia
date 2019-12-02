Rails.application.routes.draw do
  # devise_for :users
  namespace  :api do
    namespace  :v1 do
      resources :postings
      resources :favorites, only: [:index]
      post 'favorites/:posting_id', to: 'favorites#create', as: :favorite_create
      delete 'favorites/:posting_id', to: 'favorites#destroy',as: :favorite_delete
    end
  end
end