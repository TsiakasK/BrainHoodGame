// new 
function loadImages(){
	GplayerImage = new Image();
	GplayerImage.src = "Images/green_player.png";
	
	RplayerImage = new Image(); 
	RplayerImage.src = "Images/red_player.png";

	LbirdImage = new Image();
	LbirdImage.src = "Images/left_bird.png";

	RbirdImage = new Image();
	RbirdImage.src = "Images/right_bird.png";
	
	RappleImage = new Image(); 
	RappleImage.src = "Images/red_apple.png";

	GappleImage = new Image();
	GappleImage.src = "Images/green_apple.png";
	
	arrowImage = new Image();
	arrowImage.src = "Images/arrow.png";
	
	correctImage = new Image();
	correctImage.src = "Images/correct.png";
	
	wrongImage = new Image();
	wrongImage.src = "Images/wrong.png";
	
	baseImage1 = new Image();
	baseImage1.src = "Images/b1.png";
	
	baseImage2 = new Image();
	baseImage2.src = "Images/b2.png";
	
	baseImage3 = new Image();
	baseImage3.src = "Images/b3.png";
	
	baseImage4 = new Image();
	baseImage4.src = "Images/b4.png";
	
	baseImage5 = new Image();
	baseImage5.src = "Images/b5.png";
	
	baseImage6 = new Image();
	baseImage6.src = "Images/b6.png";
	
	baseImage7 = new Image();
	baseImage7.src = "Images/b7.png";
}

function set_params(){
	// RULES
	rules = [sel_params[0], sel_params[1], sel_params[2], sel_params[3]]; 
	
	stimuli_speed = -1; 
	if (sel_params[4] == 1){
		stimuli_speed = 3500;
		speed_factor = 0.7; 
	}		
	else if (sel_params[4] == 2){
		stimuli_speed = 3000; 
		speed_factor = 0.8; 
	}
	else if (sel_params[4] == 3){
		stimuli_speed = 200; 
		speed_factor = 1; 
	}
	
	spot_min = -1; 
	spot_max = -1; 
	x_min = -1; 
	x_max = -1; 
	
	if(sel_params[5] == 1){
		spot_min = 3; 
		spot_max = 5; 
		diff_factor = 0.5; 
		bases = [3,4,5];
	}
	if(sel_params[5] == 2){
		spot_min = 2; 
		spot_max = 6; 
		diff_factor = 0.75;
		bases = [2,3,4,5,6];
	}
	if(sel_params[5] == 3){
		spot_min = 1; 
		spot_max = 7; 
		diff_factor = 1;
		bases = [1,2,3,4,5,6,7];
	}
	
	// generate targets and expected responses
	TARGETS = generate_targets(); 
	EXPECTED = generate_response(); 
	start_game(); 
}

function generate_targets(){
	var rnd = Math.floor(Math.random() * 20) + (sel_params[5] - 1)*20; 
	var mydata = arrayOfTargets[rnd];
	console.log(rnd, mydata.id); 
	var obj = {
        spots: mydata.tspots,
        types: mydata.ttypes,
		color: mydata.tcolors
    };
	return obj;	
}

function generate_response(){
	var RES = []; var fmove = []; var tmp = []; 
	var t = TARGETS.types; var p = TARGETS.spots; var c = TARGETS.color; 
	
	for(var i = 0; i < t.length; i++){ 
		tmp = 1; 
		
		// AVOID BIRDS
		if (rules[1] == 1){
			if (t[i] >= 3){
				tmp *= 0; 
			}				
			else{
				tmp *= 1; 
			}
		}
		
		// REMEMBER TARGETS
		if (rules[2] == 1){ 
			if(i > 1 && p[i] == p[i-2]){ 
				tmp *= 1; 
			}
			else{
				tmp *= 0; 
			}
		}
		
		// SWITCH TARGETS
		if (rules[3] == 1){
			if (c[i] == 1){ 
				if(t[i] == 1 || t[i] == 2){
					tmp *= 1; 
				}
				else{
					tmp *= 0;
				}
			}
			else{ 
				if(t[i] == 1 || t[i] == 2){
					tmp *= 0;
				}
				else{
					tmp *= 1; 
				}
			}	
		}
		
		fmove.push(tmp); 
		RES.push(tmp); 
	}

    var obj = {
        shouldShoot: RES,
		shouldMove: fmove 
    };	
	
	return obj; 
}

function new_target(){
	player.arrows = []; 
	if (shoot == 0 && turn > -1 && wait == 0)   // DID NOT SHOOT OR MOVE DURING PREVIOUS TARGET
		draw_score(); 
	shoot = 0;  
	wait = 0; 
	moved = 0; 
	InvalidMove = 0; 
	shot = 0;
	
	turn ++; 
	targets = []; 
	spot = TARGETS.spots[turn];
	type = TARGETS.types[turn];
	
	var t = new target(spot, type);
	targets.push(t);
	 
	A = setTimeout(new_target, stimuli_speed);
	if (turn == 20){
		var audio = new Audio('Sounds/finish.mp3');
		audio.play();
		window.alert("Round Finished");
		clearTimeout(A);
		document.removeEventListener('keydown', buttonGotPressed);
		gameover = true;
		if (practice == 0){
			show_likert();
			round_scores = estimate_scores(user_response, EXPECTED, user_movement);
			document.getElementById("totalb").style.left = scores[5] + "px"; 
			document.getElementById("score1b").style.left = scores[0]+ "px"; 
			document.getElementById("score2b").style.left = scores[1]+ "px"; 
			document.getElementById("score3b").style.left = scores[2]+ "px"; 
			document.getElementById("score4b").style.left = scores[3]+ "px";
			document.getElementById("screen_score").innerHTML = "Total Points Earned: " +  Math.round(scores[5] * 10) / 10;
			document.getElementById("screen_rounds").innerHTML = "Rounds Played: " + round + "/20";
			te = [round, sel_params[0], sel_params[1], sel_params[2], sel_params[3], sel_params[4], sel_params[5], round_scores[4], round_scores[5]]; 
			table_entry.push(te);
			updateTable(round, te); 
			session_scores.push(round_scores); 
		}
		else{
			mygame.style.display = "none"; 
			BackToGame();
		}
	}	
}

function updateTable(r, data){
	if (data[1] == 1) tmp = 'X'; else tmp = '-'; var x=document.getElementById('tg-PdFaH').rows[parseInt(r,10)].cells; x[parseInt(1,10)].innerHTML=tmp;
	if (data[2] == 1) tmp = 'X'; else tmp = '-'; var x=document.getElementById('tg-PdFaH').rows[parseInt(r,10)].cells; x[parseInt(2,10)].innerHTML=tmp;
	if (data[3] == 1) tmp = 'X'; else tmp = '-'; var x=document.getElementById('tg-PdFaH').rows[parseInt(r,10)].cells; x[parseInt(3,10)].innerHTML=tmp;	
	if (data[4] == 1) tmp = 'X'; else tmp = '-'; var x=document.getElementById('tg-PdFaH').rows[parseInt(r,10)].cells; x[parseInt(4,10)].innerHTML=tmp;
	if (data[5] == 1) tmp = 'slow (1/3)'; else if (data[5] == 2) tmp = "medium (2/3)";  else tmp = 'fast (3/3)';
	var x=document.getElementById('tg-PdFaH').rows[parseInt(r,10)].cells; x[parseInt(5,10)].innerHTML=tmp;
	if (data[6] == 1) tmp = 'three (3)'; else if (data[6] == 2) tmp = "five (5)";  else tmp = 'seven (7)';
	var x=document.getElementById('tg-PdFaH').rows[parseInt(r,10)].cells; x[parseInt(6,10)].innerHTML=tmp;
	var x=document.getElementById('tg-PdFaH').rows[parseInt(r,10)].cells; x[parseInt(7,10)].innerHTML=data[7] + "/20";
	var x=document.getElementById('tg-PdFaH').rows[parseInt(r,10)].cells; x[parseInt(8,10)].innerHTML=data[8];
}

function show_likert() {
	mygame.style.display = "none";
	document.getElementById("myForm").style.display = "block";
}

function BackToGame(){
	document.getElementById("myForm").style.display = "none";
	wrapper.style.display= "block";
	clear_sel();
	ACTIVITY_LOG.push(["NEW", "0", performance.now()]); 
	if (round == 21){ // 20 rounds total
		window.alert("DONE");
	}
}

function init(){
	turn = -1;  
	shoot = 0; 
	moved = 0;
	wait = 0; 
	InvalidMove = 0;  
	
	//response = []; 
	user_response = []; ///////////
	user_movement = []; 
	user_score = []; 
	gameover = false; 
	
	mygame.style.display = "block"; 
	sc = scorec.getContext('2d');	
	sc.clearRect(0,0,scorec.width,scorec.height);
	pen = mycanvas.getContext('2d'); 	
	
	W = mycanvas.width;
	H = mycanvas.height;
	pen.clearRect(0,0,W,H);
	
	prev_counter = 0;
	counter = 0;
	current = 0; 
	
	 

	loadImages();
	document.addEventListener('keydown', buttonGotPressed, true);

	// player is the archer	
	player = {
		w : 0.1*W,
		h : 0.25*H,
		x : 0.45*W,
		y : 0.75*H,
		speed : 0.075*W,
		arrows : [],
		space: 0.05*W,

		draw : function(){
			pen.imageSmoothingEnabled = false;
			if (TARGETS.color[turn] == 1 || rules[3] == 0) // green uniform 
				pen.drawImage(GplayerImage,player.x,player.y,player.w,player.h)
			else	// red uniform 
				pen.drawImage(RplayerImage,player.x,player.y,player.w,player.h)
		},

		shoot : function(){
			if((counter-prev_counter>=0) && (player.arrows.length == 0)){
				if (rules[0] == 0){
					var b = new arrow((spot-1)*0.15*W + (this.w)/2);
				}					
				else
					var b = new arrow(this.x + (this.w)/2);
				
				this.arrows.push(b);
				prev_counter = counter;
				shot = 1; 
				var audio = new Audio('Sounds/arrow.mp3');
				audio.play();
				targets.forEach(function(target){
					if(isCollidingWithBullet(b,target) || rules[0] == 0){
						shoot = 1; 
						//this.state = "inactive";
						var index = targets.indexOf(target);
						targets.splice(index,1);
					}
					else
						shoot = 0;
					draw_score(); 
				}); 
			}	
		}
	};
	
	x_min = (spot_min-1)*(player.w + player.space); 
	x_max = (spot_max-1) *(player.w + player.space); 	
	
	new_target();	
}

function draw_bases(){
	if (bases.length == 3){
		pen.drawImage(baseImage1,2*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage2,3*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage3,4*(0.15*W),0.76*H,0.1*W,0.25*H);
	}
	if (bases.length == 5){
		pen.drawImage(baseImage1,1*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage2,2*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage3,3*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage4,4*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage5,5*(0.15*W),0.76*H,0.1*W,0.25*H);
	}
	if (bases.length == 7){
		pen.drawImage(baseImage1,0*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage2,1*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage3,2*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage4,3*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage5,4*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage6,5*(0.15*W),0.76*H,0.1*W,0.25*H);
		pen.drawImage(baseImage7,6*(0.15*W),0.76*H,0.1*W,0.25*H);
	}
}

// Listener for events
function buttonGotPressed(e){
	if (wait == 0){
		if(e.key==" ")
			player.shoot();
		
		if(e.key=="ArrowLeft"){
			if(rules[0] == 1){ 
				moved = 1;
				player.x = player.x - player.speed ;
				if(player.x<=x_min){
					player.x = x_min;
				}
			}
		}

		if(e.key=="ArrowRight"){
			if(rules[0] == 1){ 
				moved = 1; 
				player.x = player.x + player.speed ;
				if(player.x>=x_max){
					player.x = x_max;
				}
			}
		}
		
		InvalidMove = isInvalidMove(); 
		if (InvalidMove){
			draw_score(); 
			targets = [];  
			this.state = "inactive";
			var index = targets.indexOf(target);
			targets.splice(index,1); 
			wait = 1;  
		} 
	}		
}

function isInvalidMove(){
	if (rules[0] == 1 && moved == 1 && EXPECTED.shouldMove[turn] == 0)
		return 1;
	else
		return 0; 
}

// Class defined for an arrow
function arrow(x){
	this.x = x-5;
	this.y = H - player.h;
	this.w = 8;
	this.h = 20;
	this.state = "active"
	this.speed = 0.1*H;

	this.draw = function(){
		if (this.state == "active")
			pen.drawImage(arrowImage,this.x,this.y,this.w,this.h);
	}

	this.update = function(){
		this.y -= this.speed;
		if(this.y<=10){
			this.state = "inactive"
		}
	}
}

// Class defined for a target
function target(x,type){
	this.w = 0.08*W;
	this.h = 0.18*H;
	this.space = 0.07*W; 
	this.x = (x-1)*(this.w + this.space);
	this.y = 0.05*H;
	this.state = "active"

	this.draw = function(){
		if(type == 1){
			pen.drawImage(RappleImage,this.x,this.y,this.w,this.h);
		}
		if (type == 2){
			pen.drawImage(GappleImage,this.x,this.y,this.w,this.h);
		}
		if(type == 3){
			pen.drawImage(RbirdImage,this.x,this.y,this.w,this.h);
		}
		if(type == 4){
			pen.drawImage(LbirdImage,this.x,this.y,this.w,this.h);
		}
	}

	this.update = function(){

		this.x = (x-1)*(this.w + this.space);

		// To test the boundary conditions
		//if(this.x >= W-this.w || this.x<=0){
		//	this.speed *= -1;
		//}

		//this.y++;

		//if(this.y<=0){
		//	this.state = "inactive"
		//}
	}
}

function draw_score(){
	if (wait == 0){
		user_response.push(shoot);
		user_movement.push(moved); 
		if (EXPECTED.shouldShoot[turn] == shoot && InvalidMove == 0 && EXPECTED.shouldShoot[turn] == shot){
			wait = 1;
			user_score.push(1); 
			sc.drawImage(correctImage, (turn)*15, 5, 15, 20);
		}
		else{
			wait = 1; 
			user_score.push(0); 
			sc.drawImage(wrongImage, (turn)*15, 5, 15, 20);
		}
		
	} 
}


function estimate_scores(user, all_responses, movement){
	s = [0,0,0,0,0,0] // s1, s2, s3, s4, game, points

	s[4] = user_score.reduce((a, b) => a + b, 0);
	
	// move and shoot
	if (rules[0] == 1){
		s[0] = s[4]; // 0 - 20
	}
	
	// avoid birds
	if (rules[1] == 1){
		s[1] = s[4]; // 0 - 20
	}

	// remember targets
	if (rules[2] == 1){
		s[2] = s[4]; // 0 - 20
	}

	// switch targets
	if (rules[3] == 1){
		s[3] = s[4]; // 0 - 20
	}	
	
	scores[0] += s[0]*speed_factor*diff_factor;
	scores[1] += s[1]*speed_factor*diff_factor;
	scores[2] += s[2]*speed_factor*diff_factor;
	scores[3] += s[3]*speed_factor*diff_factor;
	scores[4] += s[4];
	cpoints = ( s[0]*speed_factor*diff_factor + s[1]*speed_factor*diff_factor + s[2]*speed_factor*diff_factor + s[3]*speed_factor*diff_factor)/4.0; 
	cpoints = Math.round(cpoints * 10) / 10; 
	scores[5] += cpoints;
	
	return [s[0]*speed_factor*diff_factor, s[1]*speed_factor*diff_factor, s[2]*speed_factor*diff_factor, s[3]*speed_factor*diff_factor, s[4], cpoints];
	
}

function draw(){
	//to erase the old screen. Here, we erase the whole screen and redraw it again.
	pen.clearRect(0,0,W,H);
	draw_bases();
	//Drawing the player
	player.draw()
	//Drawing the arrows
	player.arrows.forEach(function(arrow){
		arrow.draw();
	});
	//Drawing the target
	targets.forEach(function(target){
		target.draw();
	});
	//pen.fillText("Score: " + score, W-130, 50); 	
}

function update(){
	
	//player.update()
	player.arrows.forEach(function(arrow){
		arrow.update();
	});
	targets.forEach(function(target){
		target.update();
	});
	 
}

function isCollidingWithBullet(r1,r2){
	return Math.abs(r1.x - r2.x)<= (r2.w)/2;
}

function render(){
	counter++;
	draw();
	update();
	if (gameover == true){
		if (practice == 0)
			round ++; 
		else 
			practice = 0; 
		player = {}; 
		gameover = false;
	}
	else 
		window.requestAnimationFrame(render);
}

function start_game(){
	carousel();
}

// Carousel -- 3 2 1 GO!!
var myIndex = 0;
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {
		clearTimeout(C); 
		myIndex = 0; 
		init(); 
		render();
	}    
	else{
		if (myIndex > 1){
			x[myIndex-1].style.display = "block";
			C = setTimeout(carousel, 1500); // Change image every 1 second
		}
		else {
			if (rules[0] == 0){
				x[myIndex-1].style.display = "block";
				myIndex++;
			}
			else{
				x[myIndex].style.display = "block";
				myIndex++; 
			}
			C = setTimeout(carousel, 2500); // Change image every 1 second
		}
	}
}