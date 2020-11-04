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
	
	document.getElementById('perf1').alt = "unchecked"; 
	document.getElementById('perf1').src = "Images/perf1.png";
	document.getElementById('perf2').alt = "unchecked";
	document.getElementById('perf2').src = "Images/perf2.png";
	document.getElementById('perf3').alt = "unchecked";
	document.getElementById('perf3').src = "Images/perf3.png";		
	document.getElementById('perf4').alt = "unchecked";
	document.getElementById('perf4').src = "Images/perf4.png";
	document.getElementById('perf5').alt = "unchecked";
	document.getElementById('perf5').src = "Images/perf5.png";
	
	document.getElementById('diff1').alt = "unchecked"; 
	document.getElementById('diff1').src = "Images/diff1.png";
	document.getElementById('diff2').alt = "unchecked";
	document.getElementById('diff2').src = "Images/diff2.png";
	document.getElementById('diff3').alt = "unchecked";
	document.getElementById('diff3').src = "Images/diff3.png";		
	document.getElementById('diff4').alt = "unchecked";
	document.getElementById('diff4').src = "Images/diff4.png";
	document.getElementById('diff5').alt = "unchecked";
	document.getElementById('diff5').src = "Images/diff5.png";
	document.getElementById('rules1').alt = "unchecked"; 
	document.getElementById('rules1').src = "Images/rules1.png";
	document.getElementById('rules2').alt = "unchecked";
	document.getElementById('rules2').src = "Images/rules2.png";
	document.getElementById('rules3').alt = "unchecked";
	document.getElementById('rules3').src = "Images/rules3.png";
	
	document.getElementById('flow1').alt = "unchecked"; 
	document.getElementById('flow1').src = "Images/flow1.png";
	document.getElementById('flow2').alt = "unchecked";
	document.getElementById('flow2').src = "Images/flow2.png";
	document.getElementById('flow3').alt = "unchecked";
	document.getElementById('flow3').src = "Images/flow3.png";		
	document.getElementById('flow4').alt = "unchecked";
	document.getElementById('flow4').src = "Images/flow4.png";
	document.getElementById('flow5').alt = "unchecked";
	document.getElementById('flow5').src = "Images/flow5.png";
	olm_time = 0; 	
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
		if ((img.id == "perf1") || (img.id == "perf2") || (img.id == "perf3") || (img.id == "perf4") || (img.id == "perf5")){
			document.getElementById('perf1').alt = "unchecked"; 
			document.getElementById('perf1').src = "Images/perf1.png";
			document.getElementById('perf2').alt = "unchecked";
			document.getElementById('perf2').src = "Images/perf2.png";
			document.getElementById('perf3').alt = "unchecked";
			document.getElementById('perf3').src = "Images/perf3.png";		
			document.getElementById('perf4').alt = "unchecked";
			document.getElementById('perf4').src = "Images/perf4.png";
			document.getElementById('perf5').alt = "unchecked";
			document.getElementById('perf5').src = "Images/perf5.png";			
		}
		if ((img.id == "diff1") || (img.id == "diff2") || (img.id == "diff3") || (img.id == "diff4") || (img.id == "diff5")){
			document.getElementById('diff1').alt = "unchecked"; 
			document.getElementById('diff1').src = "Images/diff1.png";
			document.getElementById('diff2').alt = "unchecked";
			document.getElementById('diff2').src = "Images/diff2.png";
			document.getElementById('diff3').alt = "unchecked";
			document.getElementById('diff3').src = "Images/diff3.png";		
			document.getElementById('diff4').alt = "unchecked";
			document.getElementById('diff4').src = "Images/diff4.png";
			document.getElementById('diff5').alt = "unchecked";
			document.getElementById('diff5').src = "Images/diff5.png";			
		}
		if ((img.id == "rules1") || (img.id == "rules2") || (img.id == "rules3")){
			document.getElementById('rules1').alt = "unchecked"; 
			document.getElementById('rules1').src = "Images/rules1.png";
			document.getElementById('rules2').alt = "unchecked";
			document.getElementById('rules2').src = "Images/rules2.png";
			document.getElementById('rules3').alt = "unchecked";
			document.getElementById('rules3').src = "Images/rules3.png";					
		}
		if ((img.id == "flow1") || (img.id == "flow2") || (img.id == "flow3") || (img.id == "flow4") || (img.id == "flow5")){
			document.getElementById('flow1').alt = "unchecked"; 
			document.getElementById('flow1').src = "Images/flow1.png";
			document.getElementById('flow2').alt = "unchecked";
			document.getElementById('flow2').src = "Images/flow2.png";
			document.getElementById('flow3').alt = "unchecked";
			document.getElementById('flow3').src = "Images/flow3.png";		
			document.getElementById('flow4').alt = "unchecked";
			document.getElementById('flow4').src = "Images/flow4.png";
			document.getElementById('flow5').alt = "unchecked";
			document.getElementById('flow5').src = "Images/flow5.png";			
		}
		img.src = "Images/" + img.id + "_checked.png"; 
		img.alt = "checked"
		ACTIVITY_LOG.push([id, attempt, img.id, "0", performance.now().toString()]); 
	}
	else{
		name = "Images/" + img.id + ".png";
		img.src = "Images/" + img.id + ".png";
		img.alt = "unchecked"
		ACTIVITY_LOG.push([id, attempt, img.id, "1", performance.now().toString()]);	
	}
}

function get_params(){
	sel_params = []; 
	for(var i = 0; i < 4; i++){
		var id = "t" + String(i+1);
		name = document.getElementById(id).alt; 
		if (document.getElementById(id).alt == "unchecked")
			sel_params.push(0);
		else
			sel_params.push(1); 
	}
	
	speed = -1; 
	for(var i = 0; i < 3; i++){
		var id = "s" + String(i+1);
		name = document.getElementById(id).alt; 
		if (document.getElementById(id).alt == "checked")
			sel_params.push(i+1);
	}
	
	diff = -1; 
	for(var i = 0; i < 3; i++){
		var id = "d" + String(i+1);
		name = document.getElementById(id).alt; 
		if (document.getElementById(id).alt == "checked")
			sel_params.push(i+1);
	}
	
	return sel_params; 
}

function practice_round(){
	ACTIVITY_LOG.push([id, attempt, "PRACTICE", "0", performance.now().toString()]); 
	practice = 1; 
	prounds += 1; 
	play_sel(); 
}

function play_sel(){
	if (check_sel()){ 
		sel_params = get_params();
		wrapper = document.getElementById('wrapper');
		wrapper.style.display='none';
		set_params();
		if (practice == 0)
			ACTIVITY_LOG.push([id, attempt, "PLAY", "0", performance.now().toString()]); 
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
var session_scores = [];  // s1, s3, s3, s4, game, points
scorec = document.getElementById('score_bar'); 
scorec.width = mycanvas.width;
scorec.height = 0.2*mycanvas.height;
var params = [];
scores = [0,0,0,0,0,0]; 
round = 1; 
attempt = 1; 
prounds = 0; 












