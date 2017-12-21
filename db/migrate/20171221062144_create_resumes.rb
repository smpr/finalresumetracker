class CreateResumes < ActiveRecord::Migration[5.1]
  def change
    create_table :resumes do |t|
      t.string :company
      t.string :req
      t.string :title
      t.string :date
      t.string :ar
      t.string :notes
      t.references :user, foreign_key: true


      t.timestamps
    end
  end
end
