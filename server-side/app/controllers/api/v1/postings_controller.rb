# frozen_string_literal: true

module Api
  module V1
    class PostingsController < ApplicationController
      def index
        json_response(Posting.all)
      end

      def create; end

      def show
        render json: Posting.find(params[:id])
      end

      def update; end

      def destroy; end
    end
  end
end
