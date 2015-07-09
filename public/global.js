// sets the starting round of questions to 0
var round = 0;
// sets the starting number of correct answers to 0
var correct_answers = 0;
var total_questions = document.getElementById("question_total").innerHTML.slice(6,7)
// questions stored as JS Objects
//var question1 = {question: "This ballet, composed by Igor Stravinsky and choreographed by Vaslav Nijinsky, almost caused a riot at its 1913 premiere.", choices: "A - Coppelia\nB - The Rite of Spring\nC - Les Sylphides\nD - The Nutcracker", answer: "b"};
//
//var question2 = {question: "Twyla Tharp won a Tony for Best Choroeography in 2003 for this Broadway show, based on the music of Billy Joel.", choices: "A - Kinky Boots\nB - Spiderman: Turn Off the Dark\nC - Movin' Out\nD - Hairspray", answer: "c"};
//
//var question3 = {question: "An average cat has this many tails.", choices: "A - 1\nB - 2\nC - 3\nD - 4", answer: "a" };
//
//var question4 = {question: "This is not gluten free.", choices: "A - a Nectarine\nB - a Brussel Sprout\nC - a Chicken Egg\nD - a Beer", answer: "d" };

// question Objects stored in a JS Array
//var questions = [question1, question2, question3, question4];


//function load_questions() {
//  var content;
//  var choices;
//  var stored_content;
//  for (counter = 1; counter < questions.length + 1; counter++) {
//    content = "question" + counter +"_content";
//    choices = "question" + counter + "_choices";
//    stored_content = ("question" + counter);
//    document.getElementById(content).innerText = eval(stored_content).question;
//    document.getElementById(choices).innerText = eval(stored_content).choices;
//  }
//
//}
//load_questions();
var question_tabs = ["question1", "question2", "question3", "question4"]


// loads the question based on the current [round] - index of the Array
//function next_question() {
//  var questionDiv = document.getElementById("question");
//  questionDiv.innerText = questions[round].question;
//  var choicesDiv = document.getElementById("choices");
//  choicesDiv.innerText = questions[round].choices;
//}



function next_question() {
  document.getElementById(question_tabs[round - 1]).className = "question_template";
  document.getElementById(question_tabs[round]).className = "current_question";
}

// returns the text from the input#answer
function given_answer() {
  return document.getElementById("answer").value
};

// answer_text - String (ideally the user's input from the form)
// checks to see if that matches the answer in the question Object
// returns True/False
var correct_answer
function is_correct_answer(answer_text) {
  correct_answer = "answer" + (round + 1);
  if (answer_text.toLowerCase() === document.getElementById(correct_answer).innerHTML.slice(6,7)) {
      return true;
  } else {
      return false;
  }   
};

// correct - True/False
// if the user got the answer correct, adds one to their correct_answers
// adds message to the "question_result" div 
function update_question_result(correct) {
  if (correct === true) {
    correct_answers++;
    document.getElementById("question_result").innerText = "Success!"
  } else {
    document.getElementById("question_result").innerText = "Wrong!"
  }
};

// stores the user's input in a variable
// runs functions to update question_results (including adding to round and correct_answers)
// hides the submit button
function process_answer_submission() {
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
  document.getElementById("submitter").style.visibility="hidden";
  document.getElementById("next").style.visibility="visible";
};

// when the submitter button is clicked, process_answer_submission is ran
document.getElementById("submitter").onclick = process_answer_submission;

// clears the "answer" input field
function clear_answer () {
  document.getElementById("answer").value = "";
}

// clears the question_result div
function clear_question_result () {
  document.getElementById("question_result").innerText = "";
}

// compares the round number to the total number of questions
// returns False if the game is not over
// returns True if the round number equals the number of questions
function is_game_over () {
  if (round < total_questions) {
      return false; 
  } else {
      return true;
  }
};

// set of functions to happen when the "next" button is clicked
// clears previous entries, adds to the round number, shows the submit button
function next_button() {
  clear_answer();
  clear_question_result();
  document.getElementById("next").style.visibility="hidden";
  round++;
  document.getElementById("submitter").style.visibility="visible";
  if (is_game_over() === true) {
      final_total();
  } else {
      next_question();
  }
}

// when the "next" button is clicked, runs the next_button function
document.getElementById("next").onclick = next_button;

// adds text to the total_result div
function final_total() {
  var final_statement = "You answered " + correct_answers + " out of " + total_questions + "!\nThat's " + (correct_answers / total_questions * 100).toFixed(0) + "% correct";
  document.getElementById("total_result").innerText = final_statement;
}