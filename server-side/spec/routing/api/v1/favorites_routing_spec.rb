# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::FavoritesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/v1/favorites').to route_to('api/v1/favorites#index')
    end
  end
end
