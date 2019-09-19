console.log("skrypty załadowane! :)");

const sec = document.querySelector("#sec");
let second = 0;
let minute = 0;
let hour = 0;

setInterval(function(){
    second++;
     sec.textContent = hour + " godzin " + minute + " minut " + second + " sekund"; 
     console.log("sekunda");
     if(second === 60){
          second = 0;
          minute++;
        };
        if(minute === 60) {
            minute = 0;
            hour++;
        };
}, 1000);

