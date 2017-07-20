var createPolitician = function(name, partyColor){

    var politician = {}; // new blank object!
    politician.name = name; // set name property to the value of the name parameter
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
  
    politician.announcePolitician = function()// delete this function when done
    {
      console.log("Welcome " + this.name +  ", good luck!");
    };
 
    politician.announcePolitician(); // delete this line when done
  
  
  
  
  
  
  
  // method for tallying votes, add to factory function above return statement
politician.tallyUpTotalVotes = function(){

    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }

};
  
    return politician;

};

// pass in the party color array when the politicians are created
var candidate1 = createPolitician("John Doe",[245, 141, 136]);
var candidate2 = createPolitician("Jane Doe", [132, 17, 11]);


candidate1.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

candidate2.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];


candidate1.electionResults[9] = 1;
candidate2.electionResults[9] = 28;

candidate1.electionResults[4] = 17;
candidate2.electionResults[4] = 38;

candidate1.electionResults[43] = 11;
candidate2.electionResults[43] = 27;

console.log(candidate1.electionResults);
console.log(candidate2.electionResults);


var setStateResults = function(state){

    theStates[state].winner = null;

    if (candidate2.electionResults[state] > candidate1.electionResults[state]) {
        
        theStates[state].winner = candidate2; //set winner to the candidate object, not the candidate's name this time

    } else if (candidate2.electionResults[state] < candidate1.electionResults[state]) {

        theStates[state].winner = candidate1;

    }
  
  var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}
  var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = candidate2.name;
row.children[1].innerText = candidate2.totalVotes;
row.children[2].innerText = candidate1.name;
row.children[3].innerText = candidate1.totalVotes;
row.children[5].innerText = winner;
  
var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = candidate1.name;
candidate2Name.innerText = candidate2.name;

candidate1Results.innerText = candidate1.electionResults[state];
candidate2Results.innerText = candidate2.electionResults[state];

if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
  
};


 // calling the method for each politician, add below the code that updates the electionResults arrays
candidate1.tallyUpTotalVotes();
candidate2.tallyUpTotalVotes();

//console log total votes
console.log(candidate1.totalVotes);
console.log(candidate2.totalVotes);


// console messages to make sure the property is assigned correctly
console.log(candidate2.name + "'s color is: " + candidate2.partyColor);
console.log(candidate1.name + "'s color is: " + candidate1.partyColor);



var winner = "???";

if (candidate1.totalVotes > candidate2.totalVotes){
    winner = candidate1.name;
}else if (candidate1.totalVotes < candidate2.totalVotes){
    winner = candidate2.name;
}else{
    winner = "DRAW."
}

console.log("AND THE WINNER IS..." + winner + "!!!");



