class AddAdminToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :admin, :bool,:null => false, default: false
  end
end
