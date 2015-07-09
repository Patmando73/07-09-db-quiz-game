CONNECTION = SQLite3::Database.new("quiz.db")

CONNECTION.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, question_content TEXT, choice TEXT, answer TEXT);")

CONNECTION.results_as_hash = true
