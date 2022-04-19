let quote = document.getElementById("quote");
let character = document.getElementById("character");
let btn = document.getElementById("btn");

const url = "https://friends-quotes-api.herokuapp.com/quotes/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.quote;
      character.innerText = item.character;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);


function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}




// got you
function pageConfirm() {
  ConfirmStatus = confirm("Are You Sure?");
   
  if (ConfirmStatus == true) {
    location.href = 'got u.jpeg';
    }
  }