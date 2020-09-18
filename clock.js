const hour=document.getElementById("hr");
const minute=document.getElementById("min");
const second=document.getElementById("sec");
    setInterval(function(){
        let day=new Date();
        let hr=day.getHours()*30;
        let min= day.getMinutes()*6;
        let sec=day.getSeconds()*6;
        hour.style.transform="rotateZ((hr+min/12)deg)";
        
    });
