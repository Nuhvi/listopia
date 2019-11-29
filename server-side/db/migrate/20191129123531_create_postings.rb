class CreatePostings < ActiveRecord::Migration[5.2]
  def change
    create_table :postings do |t|
      t.string :title, limit: 40
      t.integer :price
      t.text :desc

      t.timestamps
    end
  end
end
