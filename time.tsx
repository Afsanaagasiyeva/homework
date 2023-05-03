
let minute = 0
let second = 0
 let interval=setInterval( function()  {

    if (second < 59) {
        second +=1
    }
    else {
        minute +=1
        second =0
        if(minute===15){
            clearInterval(interval);
        }
    }
    console.log( minute + ":" + second)
},1000)