class AddUniqueIndexToFavorite < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, [:user_id, :posting_id], unique: true
  end
end
