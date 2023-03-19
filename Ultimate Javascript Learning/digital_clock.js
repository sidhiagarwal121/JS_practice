setInterval(showtime,1000)
function showtime()
{   
    let a=new Date()
    let h=a.getHours()
    let m=a.getMinutes()
    let s=a.getSeconds()
    document.querySelector("#hour").innerHTML=h;
    document.querySelector("#minute").innerHTML=m;
    document.querySelector("#second").innerHTML=s;
}

