require "sqlite3"

module Db
  # Open a database
  db = SQLite3::Database.new "tasks.db"
 
  # Create a table
  rows = db.execute <<-SQL
    create table activity (
      name varchar(30),
      topic varchar(30)
    );
  SQL
  
  # Execute a few inserts
  {
    "Introduction to Algorithms by CLRS" => 1,
    "Coding Challenge" => 2,
  }.each do |pair|
    db.execute "insert into activity values ( ?, ? )", pair
  end
  
  # Find a few rows
  db.execute( "select * from activity" ) do |row|
    p row
  end
end
