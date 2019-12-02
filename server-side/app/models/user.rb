# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :postings, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorite_postings, through: :favorites, source: :posting

  def toggle_favorite(posting)
    favorite = Favorite.find_by(posting: posting)
    if favorite
      favorite.destroy
    else
      favorites.create(posting: posting)
    end
  end
end
