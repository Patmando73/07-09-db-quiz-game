require_relative "../database_class_methods.rb"
require_relative "../database_instance_methods.rb"

class Question
  extend DatabaseClassMethods
  include DatabaseInstanceMethods

  attr_reader :question, :id, :choice, :answer

  def initialize(options = {})
    @question = options["question_content"]
    @id = options["id"]
    @choice = options["choice"]
    @answer = options["answer"]
  end
  def self.num_of_questions

    result = CONNECTION.execute("SELECT COUNT(*) FROM questions;").first[0]

    return result
  end


end