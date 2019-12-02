class AddUserFKtoPostings < ActiveRecord::Migration[5.2]
  def change
    add_reference :postings, :user, foreign_key: true
  end
end
