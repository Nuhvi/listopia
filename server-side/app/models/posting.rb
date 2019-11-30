# frozen_string_literal: true

class Posting < ApplicationRecord
  validates :title, uniqueness: true, presence: true, length: { in: 6..40 }
  validates :price, presence: true
  validates :desc, presence: true, length: { maximum: 280 }
  validates :category, presence: true,
                       inclusion: { in: %w[Apartment House Room Land Other],
                                    message: '%<value>s is not a valid category' }

  default_scope { order(created_at: :desc) }
  belongs_to :user
end
