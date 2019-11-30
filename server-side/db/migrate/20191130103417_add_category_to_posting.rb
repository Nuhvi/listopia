class AddCategoryToPosting < ActiveRecord::Migration[5.2]
  def change
    add_column :postings, :category, :string
  end
end
