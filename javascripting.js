document.getElementById('box1').addEventListener('click', OnClickchangeColor);

document.getElementById('box2').addEventListener('mouseout', onMouseOutThankyou);

document.getElementById('box3').addEventListener('mouseenter', OnMouseenterColor);

document.getElementById('box4').addEventListener('mouseover', OnMouseoverAlert);

document.getElementById('box5').addEventListener('submit', onsubmitAlert);

function OnClickchangeColor() {
    this.style.backgroundColor = "red"; 
}
function onMouseOutThankyou(){
      this.innerHTML = "You can now read my text!";
}
 function OnMouseenterColor(){
      this.style.backgroundColor = "blue";
}
function OnMouseoverAlert(){
    alert("Thank you!");
}
function onsubmitAlert(){
       alert("Click OK to Refresh page");
}