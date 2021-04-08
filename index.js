var a,sound,bool2,bool3=true;
window.onload=()=>
{
    sound= document.querySelector('audio');
}
alert("This is my code for a timer.\nEnter the time in hours, minutes and seconds in their respective input boxes.\nAvoid pressing the start more than one time consecutively.\nDo not enter '0' leading numbers in the input boxes.\nPlease upvote if you like and comment for any improvement to be done.");
var bool=confirm("Do you allow to play a sound when the time is over");
function playSound()
{
    sound.play();
}
function sec()
{
var h1=document.getElementById("h");
var m1=document.getElementById("m");
var s1=document.getElementById("s");
if(h1.value==0&&m1.value==0&&s1.value==0&&bool2&&!bool)    navigator.vibrate([500,200,500,200,500,200,500,200,2000]); 
    show();
    var b;
    if(s1.value==0)
    {
        b=59;
        if(m1.value==0)
        {
            m1.value=59;
            h1.value--;
            checkH();
        }
        else
            m1.value--;
            checkM();
    }
    else
        b=s1.value-1;
    s1.value=b;
    checkS();
    
}
function show()
{
    var h1=document.getElementById("h");
    var m1=document.getElementById("m");
    var s1=document.getElementById("s");
    if(h1.value==0&&m1.value==0&&s1.value==0&&bool2)
    {  
        
        if(bool)
        {
            
            playSound();
            var c=setInterval(playSound,7000);
        }
                                
        
        alert("TIME UP!");
        bool3=false;
        document.body.innerHTML="";
        if(bool)
            clearInterval(c);
        alert("Thanks for visiting my code");
        clearInterval(a);
    }
}
function checkH()
{    
   if(bool3)
   {var h1=document.getElementById("h");
   if(h1.value>99)
   {
       h1.value=99;
   } 
   if(h1.value<10)
   {
       h1.value="0"+h1.value;
   }}
}
function checkM()
{
    if(bool3)
  { var m1=document.getElementById("m");
   if(m1.value>59)
   {
       m1.value=59;
   } 
   if(m1.value<10)
   {
       m1.value="0"+m1.value;
   }}
}
function checkS()
{
    if(bool3)
  { var s1=document.getElementById("s");
   if(s1.value>59)
   {
       s1.value=59;
   } 
   if(s1.value<10)
   {
       s1.value="0"+s1.value;
   }}
}
function start()
{
    bool2=true;
    sound.play();
    sound.pause();
    var h1=document.getElementById("h");
    var m1=document.getElementById("m");
    var s1=document.getElementById("s");
    a=setInterval(sec,1000);
}
function stop()
{
        clearInterval(a);
}
function reset()
{
    var h1=document.getElementById("h");
    var m1=document.getElementById("m");
    var s1=document.getElementById("s");
    h1.value=m1.value=s1.value="00";
    bool2=false;
    stop();
}
