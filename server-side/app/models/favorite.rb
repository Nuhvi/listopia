# frozen_string_literal: true

class Favorite < ApplicationRecord
  validates :user, presence: true
  validates :posting, presence: true

  belongs_to :user
  belongs_to :posting
end
