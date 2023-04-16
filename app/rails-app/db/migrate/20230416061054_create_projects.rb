class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false, comment: "プロジェクト名"
      t.timestamps
    end
  end
end
