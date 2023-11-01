
 

 let a;
 let b;
 let time;

setInterval(() => { 
    a = new Date();
    // time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + ":" + a.getMilliseconds();
    time = a.toLocaleTimeString();
    document.getElementById('clock').innerHTML = time;
}, 1000);

setInterval(() => { 
    b = new Date();
    time = b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds() + ":" + b.getMilliseconds();
    document.getElementById('timer').innerHTML = time;
}, 1);




