get "/home" do
  @question1 = Question.find(1)
  @question2 = Question.find(2)
  @question3 = Question.find(3)
  @question4 = Question.find(4)
  erb :"/main/home"
end