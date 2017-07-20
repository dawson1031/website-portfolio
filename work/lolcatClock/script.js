var wakeUpTime = 8;
var lunchTime = 12;
var eveningTime = 17;
var napTime = 14; 
var partyTime = 21;
var sleepTime = 24;
  
var updateClock = function(){

var messageText;
var showMessage = document.getElementById("timeEvent");

var lolcatImage = document.getElementById('lolcatImage');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";


var time = new Date().getHours();
if (time <= wakeUpTime){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
 messageText = "Wake Up!";
}
else if (time < lunchTime) 
{   image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Morning!";
}
else if (time == lunchTime){
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  messageText = "Lunch Time!";
}
else if (time >= napTime && time < eveningTime){
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg"; 
  messageText = "Nap Time!";
}

else if (time >= partyTime && time < sleepTime){
   image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
   messageText = "IZ PARTEE TIME!!";
}
  
  else if (time >= eveningTime) 
{   image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
}
  
else {   image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
   messageText = "Good Afternoon!";
}
   /* console.log(messageText);*/
showMessage.innerText = messageText;
lolcatImage.src = image;
  
     showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= lunchTime) 
    { 
        meridian = "PM"; 
    }  
    if (hours > lunchTime) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {

  
   if (isPartyTime == false) {
     isPartyTime = true;
     time = partyTime;

      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";

  
   } else {
      isPartyTime = false;
      time = new Date().getHours();
       document.getElementById("lolcatImage").src = "http://media.salon.com/2015/11/wet_cat.jpg"
       document.getElementById("timeEvent").innerHTML = "Party Over"
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener('click', partyEvent);


var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);

var napTimeSelector =  document.getElementById("napTimeSelector");
var napEvent = function()
{
    napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);