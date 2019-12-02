# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::FavoritesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/v1/favorites').to route_to('api/v1/favorites#index')
    end

    it 'routes to #create' do
      expect(post: '/api/v1/favorites/1').to route_to('api/v1/favorites#create', posting_id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/api/v1/favorites/1').to route_to('api/v1/favorites#destroy', posting_id: '1')
    end
  end
end
