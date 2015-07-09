require "sinatra"
require "sinatra/reloader"
require "pry"

require "sqlite3"
require_relative "database_setup.rb"

require_relative "controllers/main.rb"
require_relative "models/question.rb"