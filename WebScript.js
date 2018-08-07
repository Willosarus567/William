
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

/*const HOURHAND = document.querySelector("#hour1");
const MINUTEHAND = document.querySelector("#minute1");
const SECONDHAND = document.querySelector("#second1");

const HOURHAND = document.querySelector("#hour2");
const MINUTEHAND = document.querySelector("#minute2");
const SECONDHAND = document.querySelector("#second2");

const HOURHAND = document.querySelector("#hour3");
const MINUTEHAND = document.querySelector("#minute3");
const SECONDHAND = document.querySelector("#second3");

const HOURHAND = document.querySelector("#hour4");
const MINUTEHAND = document.querySelector("#minute4");
const SECONDHAND = document.querySelector("#second4");

const HOURHAND = document.querySelector("#hour5");
const MINUTEHAND = document.querySelector("#minute5");
const SECONDHAND = document.querySelector("#second5");
    
const HOURHAND = document.querySelector("#hour6");
const MINUTEHAND = document.querySelector("#minute6");
const SECONDHAND = document.querySelector("#second6");

const HOURHAND = document.querySelector("#hour7");
const MINUTEHAND = document.querySelector("#minute7");
const SECONDHAND = document.querySelector("#second7");
*/
const HOURHAND8 = document.querySelector("#hour8");
const MINUTEHAND8 = document.querySelector("#minute8");
const SECONDHAND8 = document.querySelector("#second8");
/*
const HOURHAND = document.querySelector("#hour9");
const MINUTEHAND = document.querySelector("#minute9");
const SECONDHAND = document.querySelector("#second9");	

const HOURHAND = document.querySelector("#hour10");
const MINUTEHAND = document.querySelector("#minute10");
const SECONDHAND = document.querySelector("#second10");

const HOURHAND = document.querySelector("#hour11");
const MINUTEHAND = document.querySelector("#minute11");
const SECONDHAND = document.querySelector("#second11");

const HOURHAND = document.querySelector("#hour12");
const MINUTEHAND = document.querySelector("#minute12");
const SECONDHAND = document.querySelector("#second12");

const HOURHAND = document.querySelector("#hour13");
const MINUTEHAND = document.querySelector("#minute13");
const SECONDHAND = document.querySelector("#second13");

const HOURHAND = document.querySelector("#hour14");
const MINUTEHAND = document.querySelector("#minute14");
const SECONDHAND = document.querySelector("#second14"); */

function runTheClock() {
	
	var date = new Date(); 
    console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);  

    let hrPosition = (hr*360/12)+(min*(360/60)/12); 
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;
 
    /* hrPosition = hrPosition+(3/360); 
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6; */
    
 
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

function runTheClock8() {
    
	var date8 = new Date();

    let hr8 = date8.getHours8();
    let min8 = date8.getMinutes8();
    let sec8 = date8.getSeconds8();
    console.log("Hour: " + hr8 + " Minute: " + min8 + " Second: " + sec8);  

    let hrPosition8 = (hr*360/12)+(min*(360/60)/12); 
    let minPosition8 = (min*360/60)+(sec*(360/60)/60);
    let secPosition8 = sec*360/60;
 
    /* hrPosition = hrPosition+(3/360); 
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6; */
    
 
    HOURHAND8.style.transform = "rotate(" + hrPosition8 + "deg)";
    MINUTEHAND8.style.transform = "rotate(" + minPosition8 + "deg)";
    SECONDHAND8.style.transform = "rotate(" + secPosition8 + "deg)";
}
/* See this code right here called setInterval(), what that does is a method 
   which repeatedly calls a function or executes a code snippet, with a fixed time delay 
   between each call. Returns an interval. Inside this metthod of set interval
   we have our function, as well as the number of milliseconds it should run by   */

   var interval = setInterval(runTheClock, 1000);
   var interval8 = setInterval(runTheClock8, 1000); 
