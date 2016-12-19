require "sidekiq/web"

# rubocop:disable Metrics/BlockLength
Rails.application.routes.draw do
  mount Sidekiq::Web => "/sidekiq"
  namespace :api do
    namespace :v1 do
      resources :pages
      resources :subjects
      resources :makers
      resources :resources
      resources :texts

      resources :collections do
        scope module: :collections do
          namespace :relationships do
            resources :collection_resources, only: [:index, :show]
            resources :resources, only: [:index]
          end
        end
      end

      resources :text_sections, only: [:show] do
        scope module: :text_sections do
          namespace :relationships do
            resources :annotations, only: [:index, :create]
          end
        end
      end

      # TODO: Implement
      resources :collaborators, only: [:show]
      resources :collection_resources, only: [:show]
      # END TODO

      resources :projects do
        scope module: :projects do
          namespace :relationships do
            resources :uncollected_resources, only: [:index]
            resources :resources, only: [:index]
            resources :events, only: [:index]
            resources :collaborators
          end
        end
      end

      resources :tokens, only: [:create]

      resources :users, only: [:create, :show] do
        collection do
          get "whoami"
        end
      end

      namespace :configuration do
        resource :client, only: [:show], controller: "client"
      end

      resource :me, only: [:show, :update], controller: "me"
      namespace :me do
        namespace :relationships do
          resources :favorites
          resources :favorite_projects, only: [:index]
        end
      end

      get "*path", to: "errors#error_404", via: :all
    end
  end
end
# rubocop:enable Metrics/BlockLength
