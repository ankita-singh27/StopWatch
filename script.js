
    const timer = document.getElementById("timer");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let t;

    function buildTimer () {
      seconds++;
          if (seconds >= 60) {
              seconds = 0;
              minutes++;
              if (minutes >= 60) {
                  minutes = 0;
                  hours++;
                  
              }
          }
          
          timer.textContent=(hours < 10 ? '0' :'') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
     
    }

////////////////////////start the timer////////////////////////////////

        start.addEventListener("click", function(){
         // clearTimeout(t);
          t = setInterval(buildTimer,1000);
        });
    ////////////////////////  stop the timer////////////////////////////////

      stop.addEventListener("click", function(){
        clearInterval(t);
      })     
// //////////////////////////reset the timer////////////////////////////////////////
      reset.addEventListener("click",function(){ 
        timer.textContent = "00:00:00";
      clearInterval(t);
      seconds = 0; minutes = 0; hours = 0;
      })
    
      
    
    
