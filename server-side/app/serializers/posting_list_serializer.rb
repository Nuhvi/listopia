# frozen_string_literal: true

class PostingListSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :category, :favorited
  
  def favorited
    object.favorited?
  end
end
