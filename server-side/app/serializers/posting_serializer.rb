# frozen_string_literal: true

class PostingSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :desc, :category, :favorited

  def favorited
    object.favorited?
  end
end
