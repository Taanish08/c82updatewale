Canvas=document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");
mouseEvent=["empty"]

Canvas.addEventListener("mousedown",myMousedown);
 function myMousedown (e) {
    
 var wido=document.getElementById("width").value;
var rads=document.getElementById("radius").value;
var cole=document.getElementById("color").value;
mouseEvent="mousedown";

}

Canvas.addEventListener("mouseleave",myMouseleave);
 function myMouseleave (e) {

mouseEvent="mouseleave";

}

Canvas.addEventListener("mouseup",myMouseup);
 function myMouseup (e) {

mouseEvent="mouseup";

}

Canvas.addEventListener("mousemove",myMousemove);
 function myMousemove (e) {

current_position_of_mouse_x = e.clientX - Canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - Canvas.offsetTop;

if (mouseEvent == "mouseDown") {
    console.log("Current position of x and y coordinates =")
    console.log("x =" + current_position_of_mouse_x + "y =" +
    current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle=cols;
    ctx.lineWidth=wido;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,rads, 0, 2*Math.PI);
    ctx.stroke();
}

}