# frozen_string_literal: true

class Favorite < ApplicationRecord
  validates :user, presence: true
  validates :posting, presence: true, uniqueness: { scope: :user,
                                                    message: 'has already been favorited by this User' }

  default_scope { order(created_at: :desc) }
  
  belongs_to :user
  belongs_to :posting
end
