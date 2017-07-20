$(document).ready(function(){

  //create magic8ball object
var magic8ball = {};

//assign array of answers to listOfAnswers property on magic8ball object
magic8ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

    $("#answer").hide();
  
//define askQuestion method of magic8ball object
//it should take a question parameter
  magic8ball.askQuestion = function(question) {
   
    
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"); 
    $("#answer").fadeIn(4000);

  //generate a random answer from the 
  //listOfAnswers property of this object (magic8ball)
  var randomNumber = Math.random();
  var randomNumberArray = randomNumber * this.listOfAnswers.length;
  var randomIndexNumber = Math.floor(randomNumberArray);
  var randomAnswer = this.listOfAnswers[randomIndexNumber];
 

    $("#answer").text(randomAnswer);
  //show the question that was passed in
  console.log(question);
  //show the random answer
  console.log(randomAnswer);
  
};

    var onClick = function() {

      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

      
      
        $("#answer").hide();
        
    setTimeout(
    function() {
     var question = prompt("ASK A YES/NO QUESTION!");
         $("#8ball").effect( "shake" );
        magic8ball.askQuestion(question);
    }, 500);
      
      

      
 

    };

    $("#questionButton").click( onClick );
  
//call magic8ball.askQuestion method
//and pass in a question as a parameter
//magic8ball.askQuestion("Will I ever learn JavaScript?");
  
  });


