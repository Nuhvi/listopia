# frozen_string_literal: true

class Api::V1::PostingsController < ApplicationController
  before_action :set_posting, only: %i[show update destroy]

  # GET /postings
  def index
    @postings = Posting.all

    render json: @postings
  end

  # GET /postings/1
  def show
    render json: @posting
  end

  # POST /postings
  def create
    @posting = Posting.new(posting_params)

    if @posting.save
      render json: @posting, status: :created, location: api_v1_posting_url(@posting.id)
    else
      render json: @posting.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /postings/1
  def update
    if @posting.update(posting_params)
      render json: @posting
    else
      render json: @posting.errors, status: :unprocessable_entity
    end
  end

  # DELETE /postings/1
  def destroy
    @posting.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_posting
    @posting = Posting.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def posting_params
    params.fetch(:posting, {}).permit(:title, :price, :desc)
  end
end
