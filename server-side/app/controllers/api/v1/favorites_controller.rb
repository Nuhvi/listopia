# frozen_string_literal: true

class Api::V1::FavoritesController < ApplicationController
  before_action :set_posting, only: %i[create destroy]

  # GET /favorites
  def index
    @favorited_postings = Favorite.all.map(&:posting)
    render json: @favorited_postings
  end

  # POST /favorites
  def create
    favorite = @user.mark_favorite(@posting)
    if favorite.valid?
      render json: @posting, status: :created
    else
      render json: favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorites/1
  def destroy
    @user.unmark_favorite(@posting)
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_posting
    @posting = Posting.find(params[:posting_id])
  end

  # Only allow a trusted parameter "white list" through.
  def favorite_params
    params.fetch(:favorite, {})
  end
end
