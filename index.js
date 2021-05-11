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
	myFunc();
	
}
function reload(){
	for(var i=0;i<9;i++){
		document.querySelectorAll("button")[i].textContent="";
		document.querySelectorAll("button")[i].classList.remove("flash");
	}
	current_step=1;
	document.querySelector(".status").textContent=("Player-1 Sign --> O.....Player-2 Sign --> X");

}


function myFunc(){
	var j=0;
	var k=0;
		for(j=0,k=0;j<=6 && k<=2 ;j+=3,k++){
	if(document.querySelectorAll("button")[j].textContent=="X"){
		if(document.querySelectorAll("button")[j+1].textContent=="X"){
			if(document.querySelectorAll("button")[j+2].textContent=="X"){
				flash("r"+j);
			}
		}
	}
	if(document.querySelectorAll("button")[k].textContent=="X"){
		if(document.querySelectorAll("button")[k+3].textContent=="X"){
			if(document.querySelectorAll("button")[k+6].textContent=="X"){
				flash("c"+k);
			}
		}
	}
	if(document.querySelectorAll("button")[j].textContent=="O"){
		if(document.querySelectorAll("button")[j+1].textContent=="O"){
			if(document.querySelectorAll("button")[j+2].textContent=="O"){
				flash("r"+j);
			}
		}
	}
	if(document.querySelectorAll("button")[k].textContent=="O"){
		if(document.querySelectorAll("button")[k+3].textContent=="O"){
			if(document.querySelectorAll("button")[k+6].textContent=="O"){
				flash("c"+k);
			}
		}
	}


}
var l=0;
if(document.querySelectorAll("button")[l].textContent=="X"){
	if(document.querySelectorAll("button")[l+4].textContent=="X"){
		if(document.querySelectorAll("button")[l+8].textContent=="X"){
			flash("d"+1);
		}
	}
}
if(document.querySelectorAll("button")[l].textContent=="O"){
	if(document.querySelectorAll("button")[l+4].textContent=="O"){
		if(document.querySelectorAll("button")[l+8].textContent=="O"){
			flash("d"+1);
		}
	}
}
l=2;
if(document.querySelectorAll("button")[l].textContent=="X"){
	if(document.querySelectorAll("button")[l+2].textContent=="X"){
		if(document.querySelectorAll("button")[l+4].textContent=="X"){
			flash("d"+2);
		}
	}
}
if(document.querySelectorAll("button")[l].textContent=="O"){
	if(document.querySelectorAll("button")[l+2].textContent=="O"){
		if(document.querySelectorAll("button")[l+4].textContent=="O"){
			flash("d"+2);
		}
	}
}


}
function flash(num){
	if(num=='c0'){
		document.querySelectorAll("button")[0].classList.add("flash");
		document.querySelectorAll("button")[3].classList.add("flash");
		document.querySelectorAll("button")[6].classList.add("flash");
		current_step=10;
	}
	if(num=='c1'){
		document.querySelectorAll("button")[1].classList.add("flash");
		document.querySelectorAll("button")[4].classList.add("flash");
		document.querySelectorAll("button")[7].classList.add("flash");
		current_step=10;
	}
	if(num=='c2'){
		document.querySelectorAll("button")[2].classList.add("flash");
		document.querySelectorAll("button")[5].classList.add("flash");
		document.querySelectorAll("button")[8].classList.add("flash");
		current_step=10;
	}
	if(num=='r0'){
		document.querySelectorAll("button")[0].classList.add("flash");
		document.querySelectorAll("button")[1].classList.add("flash");
		document.querySelectorAll("button")[2].classList.add("flash");
		current_step=10;
	}
	if(num=='r3'){
		document.querySelectorAll("button")[3].classList.add("flash");
		document.querySelectorAll("button")[4].classList.add("flash");
		document.querySelectorAll("button")[5].classList.add("flash");
		current_step=10;
	}
	if(num=='r6'){
		document.querySelectorAll("button")[6].classList.add("flash");
		document.querySelectorAll("button")[7].classList.add("flash");
		document.querySelectorAll("button")[8].classList.add("flash");
		current_step=10;
	}
	if(num=='d1'){
		document.querySelectorAll("button")[0].classList.add("flash");
		document.querySelectorAll("button")[4].classList.add("flash");
		document.querySelectorAll("button")[8].classList.add("flash");
		current_step=10;
	}
	if(num=='d2'){
		document.querySelectorAll("button")[2].classList.add("flash");
		document.querySelectorAll("button")[4].classList.add("flash");
		document.querySelectorAll("button")[6].classList.add("flash");
		current_step=10;
	}
}
