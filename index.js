document.querySelector(".reload").addEventListener("click",reload);
var current_step=1;
var steps=9;
// var c=Math.floor(((Math.random()*2)+1));

// document.querySelector(".status").textContent=("Player "+c+" will play first");
// var a=prompt("Choose Player-"+c+" Sign : X or O ");
// if(a=='x'){
// 	var b='o';
// }else{
// 	var b='x';
// }
var a='o';
var b='x';


for(var i=0;i<9;i++){
	document.querySelectorAll("button")[i].addEventListener("click",tic);
}
function tic(){
	var rem=current_step%2;
	if(rem==1 && current_step<=steps)
	{
		// if(a=='x'){
		// 	// this.classList.add("x");
		// 	this.textContent="X";
		// 	current_step++;
		// }else{
		// 	// this.classList.add("o");
		// 	this.textContent="O";
		// 	current_step++;
		// }
		this.textContent="O";
		current_step++;
	}
	else if(rem==0 && current_step<=steps){
		// if(b=='x'){
		// 	// this.classList.add("x");
		// 	this.textContent="X";
			
		// 	current_step++;
		// }else{
		// 	// this.classList.add("o");
		// 	this.textContent="O";
		// 	current_step++;
		// }
		this.textContent="X";
		current_step++;
	}
	if(current_step>steps){
		document.querySelector(".status").textContent=("GAME OVER");
	}
	
}
function reload(){
	for(var i=0;i<9;i++){
		document.querySelectorAll("button")[i].textContent="";
	}
	current_step=1;
	document.querySelector(".status").textContent=("Player-1 Sign --> O.....Player-2 Sign --> X");
}
