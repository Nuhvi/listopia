# frozen_string_literal: true

class PostingListSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :category
end
