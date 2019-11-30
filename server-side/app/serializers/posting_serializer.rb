# frozen_string_literal: true

class PostingSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :desc, :category, :favorited
end
