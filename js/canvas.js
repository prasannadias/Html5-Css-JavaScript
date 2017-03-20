/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 
function makeCanvas()
{
  var canvas=document.getElementById('myCanvas');
  var ctx= canvas.getContext("2d");
  ctx.moveTo(0,0);
  ctx.lineTo(100,200);
  ctx.stroke();
  
  var canvas2=document.getElementById('myCanvas1');
  var ctx2 = canvas2.getContext("2d");
  ctx2.font="32px Arial";
  ctx2.fillStyle="Blue";
  ctx2.strokeStyle="Black";
  
  ctx2.fillText("I Love HTML5",10,50);
  ctx2.strokeText("I Love HTML5",10,50);
  
  var canvas3=document.getElementById('myCanvas3');
  var ctx3 = canvas3.getContext('2d');
  
  ctx3.fillStyle="red";
  ctx3.strokeStyle="black";
  ctx3.lineWidth=10;
  
  ctx3.fillRect(45,5,120,120);
  ctx3.strokeRect(45,5,120,120);
  
  ctx3.fillStyle="grey";
  ctx3.fillRect(200,5,200,120);
  
  var canvas4=document.getElementById('myCanvas4');
  var ctx4 = canvas4.getContext('2d');
  
  ctx4.fillStyle="red";
  ctx4.strokeStyle="black";
  ctx4.lineWidth=8;
  ctx4.beginPath();
  ctx4.moveTo(100,100);
  ctx4.lineTo(200,200);
  ctx4.lineTo(200,150);
  ctx4.lineTo(150,200);
  ctx4.lineTo(200,200);
  ctx4.fill();
  ctx4.stroke();
  ctx4.closePath();
  
  
  var canvas5=document.getElementById('myCanvas5');
  var ctx5 = canvas5.getContext('2d');
  
  ctx5.fillStyle="red";
  ctx5.strokeStyle="black";
  ctx5.lineWidth=8;
  
  ctx5.beginPath();
  ctx5.arc(95,60,45,0,2*Math.PI);
  ctx5.stroke();
  ctx5.fill();
  ctx4.closePath();
  
  }