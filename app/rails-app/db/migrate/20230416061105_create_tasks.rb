class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false, comment: "タスク名"
      t.date :start_date, comment: "開始日"
      t.date :end_date, comment: "終了日"
      t.belongs_to :project, comment: "プロジェクトid"
      t.timestamps
    end
  end
end
