# frozen_string_literal: true

class Posting < ApplicationRecord
  @allowed_categories = %w[Apartment House Room Land Other]

  validates :title, uniqueness: true, presence: true, length: { in: 6..40 }
  validates :price, presence: true
  validates :desc, presence: true, length: { maximum: 280 }
  validates :category, presence: true,
                       inclusion: { in: @allowed_categories,
                                    message: '%<value>s is not a valid category' }

  default_scope { order(created_at: :desc) }
  belongs_to :user
  has_many :favorites, dependent: :destroy
  has_many :favoriters, through: :favorites, source: :user

  def favorited?
    !favoriters.empty?
  end
end
