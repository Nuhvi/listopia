Rails.application.routes.draw do
  # devise_for :users
  namespace  :api do
    namespace  :v1 do
      resources :postings
      resources :favorites, only: [:index]
      resources :favorites do
        member do
          post :toggle
        end
      end
    end
  end
end