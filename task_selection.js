function clear_sel(){
	document.getElementById('d1').alt = "unchecked"; 
	document.getElementById('d1').src = "Images/d1.png";
	document.getElementById('d2').alt = "unchecked";
	document.getElementById('d2').src = "Images/d2.png";
	document.getElementById('d3').alt = "unchecked";
	document.getElementById('d3').src = "Images/d3.png";
	
	document.getElementById('s1').alt = "unchecked"; 
	document.getElementById('s1').src = "Images/s1.png";
	document.getElementById('s2').alt = "unchecked";
	document.getElementById('s2').src = "Images/s2.png";
	document.getElementById('s3').alt = "unchecked";
	document.getElementById('s3').src = "Images/s3.png";

	document.getElementById('t1').alt = "unchecked"; 
	document.getElementById('t1').src = "Images/t1.png";
	document.getElementById('t2').alt = "unchecked";
	document.getElementById('t2').src = "Images/t2.png";
	document.getElementById('t3').alt = "unchecked";
	document.getElementById('t3').src = "Images/t3.png";
	document.getElementById('t4').alt = "unchecked";
	document.getElementById('t4').src = "Images/t4.png";	
}

function image_check(img){
	if (img.alt == "unchecked"){
		if ((img.id == "d1") || (img.id == "d2") || (img.id == "d3")){
			document.getElementById('d1').alt = "unchecked"; 
			document.getElementById('d1').src = "Images/d1.png";
			document.getElementById('d2').alt = "unchecked";
			document.getElementById('d2').src = "Images/d2.png";
			document.getElementById('d3').alt = "unchecked";
			document.getElementById('d3').src = "Images/d3.png";			
		}
		if ((img.id == "s1") || (img.id == "s2") || (img.id == "s3")){
			document.getElementById('s1').alt = "unchecked"; 
			document.getElementById('s1').src = "Images/s1.png";
			document.getElementById('s2').alt = "unchecked";
			document.getElementById('s2').src = "Images/s2.png";
			document.getElementById('s3').alt = "unchecked";
			document.getElementById('s3').src = "Images/s3.png";			
		}
		img.src = "Images/" + img.id + "_checked.png"; 
		img.alt = "checked"
		ACTIVITY_LOG.push([img.id, "0", performance.now()]); 
	}
	else{
		name = "Images/" + img.id + ".png";
		img.src = "Images/" + img.id + ".png";
		img.alt = "unchecked"
		ACTIVITY_LOG.push([img.id, "1", performance.now()]);	
	}
	console.log(ACTIVITY_LOG); 
}

function get_params(){
	sel_params = []; 
	for(var i = 0; i < 4; i++){
		id = "t" + String(i+1);
		name = document.getElementById(id).alt; 
		if (document.getElementById(id).alt == "unchecked")
			sel_params.push(0);
		else
			sel_params.push(1); 
	}
	
	speed = -1; 
	for(var i = 0; i < 3; i++){
		id = "s" + String(i+1);
		name = document.getElementById(id).alt; 
		if (document.getElementById(id).alt == "checked")
			sel_params.push(i+1);
	}
	
	diff = -1; 
	for(var i = 0; i < 3; i++){
		id = "d" + String(i+1);
		name = document.getElementById(id).alt; 
		if (document.getElementById(id).alt == "checked")
			sel_params.push(i+1);
	}
	
	return sel_params; 
}

function practice_round(){
	ACTIVITY_LOG.push(["PRACTICE", "0", performance.now()]); 
	practice = 1; 
	play_sel(); 
}

function play_sel(){
	if (check_sel()){ 
		sel_params = get_params();
		wrapper = document.getElementById('wrapper');
		wrapper.style.display='none';
		set_params();
		if (practice == 0)
			ACTIVITY_LOG.push(["PLAY", "0", performance.now()]); 
	}
}

function check_sel(){
	var check_tasks = (document.getElementById('t1').alt == "unchecked") && (document.getElementById('t2').alt == "unchecked") && (document.getElementById('t3').alt == "unchecked") && (document.getElementById('t4').alt == "unchecked"); 
	var check_speed = (document.getElementById('s1').alt == "unchecked") && (document.getElementById('s2').alt == "unchecked") && (document.getElementById('s3').alt == "unchecked"); 
	var check_spots = (document.getElementById('d1').alt == "unchecked") && (document.getElementById('d2').alt == "unchecked") && (document.getElementById('d3').alt == "unchecked");
	
	if (check_tasks || check_speed || check_spots){
		window.alert("           Please select ONE or MORE games,\r\nONE speed and ONE number of shooting bases!!!!"); 
		return 0 ; 
	}
	return 1; 
}

function auto_sel(){
	sel_params = [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()), Math.floor(Math.random() * 3)  + 1, Math.floor(Math.random() * 3)  + 1]; 
	wrapper = document.getElementById('wrapper');
	wrapper.style.display='none';
	set_params();	
}


function tutorial_sel(){
	pie = document.getElementById('piechart');
	pie.style.display='none';
	
	uix = document.getElementById('ui');
	uix.style.display='inline-block';
	document.getElementById('tut').src = "Images/tutorial_1100.png";
}

function eval_sel(){
	pie = document.getElementById('piechart');
	pie.style.display='none';
	
	uix = document.getElementById('ui');
	uix.style.display='inline-block';
	document.getElementById('tut').src = "Images/evaluate_sel.png";
	
}

practice = 0; 
mycanvas = document.getElementById('mycanvas'); 
mygame = document.getElementById('game'); 
var session_scores = [[0,0,0,0,0,0]];  // s1, s3, s3, s4, game, points
scorec = document.getElementById('score_bar'); 
scorec.width = mycanvas.width;
scorec.height = 0.2*mycanvas.height;
var params = [];
scores = [0,0,0,0,0,0]; 
round = 1; 












