/*const animatedLogo = document.querySelectorAll("#animatedLogo path");

for(let i=1; i<animatedLogo.length; i++){
    console.log(`Letter ${i} is ${animatedLogo[i].getTotalLength()}`);
}
*/

var  logo = document.querySelectorAll("#animatedLogo path");

logo.forEach(function(i){
  console.log(i);
  i.style.strokeDasharray = i.getTotalLength()+"px";
  i.style.strokeDashoffset = i.getTotalLength()+"px";
 // i.style.animation = "line-anim 2s ease forwards";
  //i.style.animation="fill 2s ease forwards 4s";
});
