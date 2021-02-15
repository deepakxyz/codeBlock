// count back

var countDownDate = new Date("Apr 25, 2021 24:00:00").getTime();

// update the counter every second
var x = setInterval(()=>{
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calcuation for days, hours, minutes and seconds
    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % ( 1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60))/1000);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display result
    document.getElementById("daysLeft").innerHTML = days + "d " + hours + "h " + minutes + "m "  ;

    // If the count down is finished
    if (distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Released"
    }
},1000 );