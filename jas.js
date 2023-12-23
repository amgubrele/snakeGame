//game constants
let inputDir={x:0,y:0};
const foodSound=new Audio('food.mp3');
const moveSound =new Audio('move.mp3');
const musicSound=new Audio('music.mp3');
const gameOver=new Audio('gameover.mp3');
const foodEaten=new Audio('food.mp3');
let speed=5;
let score=0;
let lastPaintTime=0;
let snakeArr=[
	{x:13,y:15}
]
musicSound.play();
let Score=document.getElementById('score');
let i=1;
let src="score:"

console.log(Score)
food={x:6, y:7};

//score update
function sUpdate()
{
	Score="score:"+i;
	Score.textContent=score;
}

//game functions 
function main(ctime)                //game loop
{

	window.requestAnimationFrame(main);
	if((ctime-lastPaintTime)/1000 < 1/speed)
	{
		return;
	}
	lastPaintTime=ctime;
	gameEngine();
	
}


//score update
function sUpdate()
{
	
	Score.textContent=src+i;
	console.log(i)
}



function iscollide(sarr){
	if(snakeArr[0].x===18 && inputDir.x===1 && inputDir.y===0)
		{
			return true;
		}
		else if(snakeArr[0].x===0 && inputDir.x===-1 && inputDir.y===0)
		{
			return true;
		}
		else if(snakeArr[0].y===18 && inputDir.x===0 && inputDir.y===1)
		{
			return true;
		}
		else if(snakeArr[0].y===0 && inputDir.x===0 && inputDir.y===-1)
		{
			return true;
		}

		else{
			return false;
		
		}

	
}






function gameEngine()
{
// part1 updating snake array


	if(iscollide(snakeArr))
	{
		musicSound.pause();
		gameOver.play();
		inputDir={x:0,y:0};
		alert("game over .press any key to play again!");
		snakeArr=[{x:13,y:15}];
		musicSound.play();
		gameOver.pause();
		score=0;
		Score.textContent="score:0";
		i=1;
		speed=5;


	}

	//after eaten a food
if(snakeArr[0].y===food.y && snakeArr[0].x===food.x)
{
	foodEaten.play();
	snakeArr.unshift({x:snakeArr[0].x +inputDir.x ,y:snakeArr[0].y +inputDir.y });
	let a=2;
	let b=16;
	food={x:Math.floor(Math.random()*15+2),y:Math.floor(Math.random()*15+2)}
	console.log(food)
	sUpdate();
	++i;
	if(i%2===0)
		speed++;

}


//moving the snake

for (let i = snakeArr.length-2; i >=0; i--) {
	
	snakeArr[i+1]={...snakeArr[i]};   //...for destructuring  (to create new snake)

}
snakeArr[0].x+=inputDir.x;
snakeArr[0].y+=inputDir.y;

	









// part2 render the snake and food
	//display the snake
	board.innerHTML="";
	snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        
        if(index===0)
        {
        	snakeElement.classList.add('head')
        }
        else
        {
        	snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement);
        

	})  

	//display the food
	foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);     
}
















//game logic
window.requestAnimationFrame(main);
window.addEventListener("keydown",e=>{
	inputDir={x:0,y:1}  //start the game
	moveSound.play();
	musicSound.play();

	switch (e.key){
	  case "ArrowUp":
	    console.log("ArrowUp");
	    inputDir.x=0;
	    inputDir.y=-1;
	    break;

	case "ArrowDown":
	    console.log("ArrowDown");
	    inputDir.x=0;
	    inputDir.y=1;
	    break;
	    

	   case "ArrowRight":
	    console.log("ArrowRight");
	    inputDir.x=1;
	    inputDir.y=0;
	    break;

	  case "ArrowLeft":
	    console.log("ArrowLeft");
	    inputDir.x=-1;
	    inputDir.y=0;
	    break;  
	default:
		break;
	}


	         




})


