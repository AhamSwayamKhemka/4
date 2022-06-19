canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(150,143,430,200,2*Math.PI);
ctx.stroke();

