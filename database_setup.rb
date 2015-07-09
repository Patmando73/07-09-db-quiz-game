DB = SQLite3::Database.new("quiz.db")

DB.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, question_content TEXT, choices TEXT, answer TEXT);")

DB.results_as_hash = true