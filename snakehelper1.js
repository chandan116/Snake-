var can=document.getElementById("canvas");
var can1=can.getContext("2d");
var snakeW=10;
var snakeH=10;
var dir="right";

// CREATE A SNAKE(WHITE BOX)
function createsnake(x,y)
{
can1.fillStyle="white";
can1.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
can1.fillStyle="black";
can1.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
}

// DEFINE LENGTH OF A SNAKE

var l=4;
arr=[];
for(var i=l-1;i>=0;i--)
{
	arr.push({x:i,y:0});
}

//  CONDITION TO MOVE A SNAKE LEFT,RIGHT,UP,DOWN
   document.addEventListener("keydown",direction)
   function direction(wwe)
   {
	    if(wwe.keyCode==37&&dir!="right")
		{
			dir="left";
		}
		else if(wwe.keyCode==38&&dir!="down")
		{
			dir="up";
		}
		else if(wwe.keyCode==39&&dir!="left")
		{
			dir="right";
		}
		else if(wwe.keyCode==40&&dir!="up")
		{
			dir="down";
		}
		
   }
// CREATE VALUE FOR FOOD

var food={
	x:Math.round(Math.random()*50+1-1),
	y:Math.round(Math.random()*50+1-1)
}
// CREATE FUNCTION FOR FOOD

function createfood(x,y)
{
	can1.fillStyle="red";
    can1.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    can1.fillStyle="black";
    can1.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
}
	
//PASSING VALUE TO FUNCTION CREATESNAKE
  
 function pass()
 { 
   can1.clearRect(0,0,can.width,can.height);
   for(i=0;i<arr.length;i++)
   {
	 var X=arr[i].x;
	 var Y=arr[i].y;
	 createsnake(X,Y);
   }
   // CALLING CREATEFOOD FUNCTION
    createfood(food.x,food.y);
   //SNAKE DEFAULT HEAD
   
   var headX=arr[0].x;
   var headY=arr[0].y;
   //TOUCH THE BORDER 
    if(headX<0||headY<0||headX>=can.width/snakeW||headY>=can.height/snakeH)
	{
      var s="GAME OVER";
	  window.alert(s);
	}
   //MOVEMENT OF A SNAKE      
    if(dir=="right")
	{
		 headX++;
	}
	else if(dir=="left")
	{
		headX--;
	}
	else if(dir=="down")
	{
		headY++;
	}
	else if(dir=="up")
	{
		headY--;
	}
	// EAT THE FOOD 
	 if(headX==food.x&&headY==food.y)
	 {
		 food={
	    x:Math.round(Math.random()*50+1),
	   y:Math.round(Math.random()*50+1)
         }
		 var newhead={
	  x:headX,
	  y:headY
  }
	 }
	 else 
	 {
		  arr.pop();
		 var newhead={
	  x:headX,
	  y:headY
	 
  }
	 }
      
   //SNAKE NEW HEAD
    
   
   arr.unshift(newhead);
  
 }
 
 
setInterval(pass,100);
 
 
  
  
 
 
