# frozen_string_literal: true

class Api::V1::FavoritesController < ApplicationController
  before_action :set_posting, only: %i[toggle]

  # GET /favorites
  def index
    @favorited_postings = Favorite.all.map(&:posting)
    render json: @favorited_postings
  end

  # Post /favorites/:id/toggle
  def toggle
    toggle = @user.toggle_favorite(@posting)
    render json: @posting
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_posting
    @posting = Posting.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def favorite_params
    params.fetch(:favorite, {})
  end
end
