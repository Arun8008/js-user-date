/*-------User Date-------*/


let h=parseInt(prompt("Enter The Hour"));
date.setHours(h);
var j=date.getHours();
if(j>=0 && j<13){
  document.write("Morning")
  document.write("<br>")
}
else if(j>=13 && j<=15){
  document.write("Afternoon")
  document.write("<br>")
}
else if(j>=16 && j<=18){
  document.write("Evening")
  document.write("<br>")
}
else if(j=20 && j<=23){
  document.write("Night")
  document.write("<br>")
}
else{
  document.write("ERROR")
}
