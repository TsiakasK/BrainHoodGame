function authenticate() {
  console.log('authenticate');
  fetch('https://stitch.mongodb.com/api/client/v2.0/app/brainhoodgame-xdgsw/auth/providers/anon-user/login', {
    method: 'POST',
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        alert('Could not loggin user');
      }
    })
    .then(function (data) {
      localStorage.setItem('userToken', data.access_token);
      fetch('https://stitch.mongodb.com/api/client/v2.0/auth/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then(function (res) {
          console.log({res});
        })
        .catch((err) => console.log({err}));
    })
    .catch((error) => console.log({error}));
  // 2. GET  @ stitch.mongodb.com/api/client/v2.0/auth/profile
}

function postSession(sessionData) {
  const variables = {session: sessionData};
  const AddSessionQuery =
    'mutation AddSession($session: SessionInsertInput!) { insertOneSession(data: $session) { OLM _id attempt id move practice round scores shoot targetsID tselection }}';

  postMutation('AddSession', AddSessionQuery, variables);
}

function postSurvey(surveyData) {
  const variables = {survey: surveyData};
  const AddSurveyQuery =
    'mutation AddSurvey($survey: SurveyInsertInput!) { insertOneSurvey(data: $survey) {round id	performance preference difficulty rules engagement}}';

  postMutation('AddSurvey', AddSurveyQuery, variables);
}

function postLog(logData) {
  const variables = {log: logData};
  const AddLogQuery =
    'mutation AddLog($log: Session_activity_logInsertInput!) { insertOneSession_activity_log(data: $log) {id attempt activity status timestamp}}';

  postMutation('AddLog', AddLogQuery, variables);
}

function postManyLog(logData) {
  const variables = {logs: logData};
  const AddLogQuery =
    'mutation AddManyLogs($logs: [Session_activity_logInsertInput!]!) { insertManySession_activity_logs(data: $logs) {insertedIds}}';

  postMutation('AddManyLogs', AddLogQuery, variables);
}

function postPlayer(playerData) {
  const variables = {plogin: playerData};
  const AddPlayerQuery =
    'mutation AddParticipant($plogin: PlayerInsertInput!){insertOnePlayer(data: $plogin) {id, age, gender, label }}';

  postMutation('AddParticipant', AddPlayerQuery, variables);
}

function postMutation(operationName, query, variables) {
  fetch('https://realm.mongodb.com/api/client/v2.0/app/brainhoodgame-xdgsw/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
    body: JSON.stringify({operationName, query, variables}),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log({response});
    });
}

function pause_game() {
  ACTIVITY_LOG.push([id, attempt, 'PAUSE', '0', performance.now().toString()]);
  closeNav();
  window.alert('Game Paused! Press OK to resume!');
  ACTIVITY_LOG.push([id, attempt, 'PAUSE', '1', performance.now().toString()]);
  //console.log(ACTIVITY_LOG);
}

// SIDE NAVIGATION
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

// video
function myFunction() {
  closeNav();
  var popup = document.getElementById('myPopup');
  popup.classList.toggle('show');
  if (popup.paused) {
    popup.play();
    ACTIVITY_LOG.push([id, attempt, 'VIDEO', '0', performance.now().toString()]);
    document.getElementById('closeVideo').style.display = 'block';
    document.getElementById('howtoplay').style.display = 'block';
  } else {
    popup.load();
    ACTIVITY_LOG.push([id, attempt, 'VIDEO', '1', performance.now().toString()]);
    document.getElementById('closeVideo').style.display = 'none';
    document.getElementById('howtoplay').style.display = 'none';
  }
}

var popup = document.getElementById('myPopup');
popup.onended = function () {
  popup.load();
  ACTIVITY_LOG.push([id, attempt, 'VIDEO', '2', performance.now().toString()]);
  document.getElementById('closeVideo').style.display = 'none';
  document.getElementById('howtoplay').style.display = 'none';
};

// OPEN LEARNER MODEL
var acc = document.getElementsByClassName('accordion');
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    reset_table_background();
    var panel = this.nextElementSibling;
    if (panel.style.display == 'block') {
      ACTIVITY_LOG.push([id, attempt, panel.id, '1', performance.now().toString()]);
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
      ACTIVITY_LOG.push([id, attempt, panel.id, '0', performance.now().toString()]);
      //start_times[i] = performance.now().toString();
    }
    var pans = document.getElementsByClassName('panel2');
    for (var j = 0; j < pans.length; j++) {
      if (pans[j] === panel && panel.style.display == 'block') {
        highlight_rows(j);
        drawCurveTypes();
      } else pans[j].style.display = 'none';
    }
  });
}

function highlight_rows(k) {
  skill2plot = k;
  for (var i = 0; i < table_entry.length; i++) {
    if (table_entry[i][k + 1] == 1)
      document.getElementById('tg-PdFaH').rows[parseInt(i + 1, 10)].style.backgroundColor = 'yellow';
  }
}

function reset_table_background() {
  for (var i = 0; i < table_entry.length; i++) {
    document.getElementById('tg-PdFaH').rows[parseInt(i + 1, 10)].style.backgroundColor = 'white';
  }
}

function start_session(){
	// Generate uniqueID
	authenticate();
	id = Math.random().toString(36).substr(2, 5) + Date.now() + Math.random().toString(36).substr(2, 5) + Math.floor(Math.random() * 10) + Math.random().toString(36).substr(2, 5);
	
	var age = document.getElementById('age').value;
	var genders = document.getElementsByName('gender');
    var v = 0;
    for (var i = 0; i < genders.length; i++){
		if (genders[i].checked){
			v = genders[i].value;
		}
	}
	var comment = document.getElementById('comment').value;
	var plogin = {
		id: id, 
		age: age, 
		gender: v, 
		label: comment	
	};
	postPlayer(plogin); 
	document.getElementById("loginform").style.display = "none";
	
	ACTIVITY_LOG = [[id, 0, 'NEW', '0', performance.now().toString()]];
	olm_time = 0;
	table_entry = []; // round ID, T1 ,T2, T3, T4, Speed, Difficulty, Score, Points
}

// Get the modal
var modal = document.getElementById('myModal');
// Get the tutorial modal
var tut_modal = document.getElementById('tutorial');
// Get the button that opens the modal
var btn = document.getElementById('myBtn');
// Get the button that opens the tutorial
var tut_btn = document.getElementById('tutBtn');
var tut_pic = document.getElementById('tutorial_pic');
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName('close')[0];
var span2 = document.getElementsByClassName('close')[1];

// When the user clicks the button, open the modal
btn.onclick = function () {
  OLM_START_TIME = performance.now();
  var temp = (Math.round(scores[5] * 10) / 10).toString();
  document.getElementById('tscore_text').innerHTML = 'My Score: ' + temp;
  document.getElementById('total').width = scores[5]/2.0;
  var temp = (Math.round(scores[0] * 10) / 10).toString();
  document.getElementById('s1_text').innerHTML = 'Move and Shoot: ' + temp;
  document.getElementById('score1').width = scores[0];
  var temp = (Math.round(scores[1] * 10) / 10).toString();
  document.getElementById('s2_text').innerHTML = 'Avoid Birds: ' + temp;
  document.getElementById('score2').width = scores[1];
  var temp = (Math.round(scores[2] * 10) / 10).toString();
  document.getElementById('s3_text').innerHTML = 'Remember Targets: ' + temp;
  document.getElementById('score3').width = scores[2];
  var temp = (Math.round(scores[3] * 10) / 10).toString();
  document.getElementById('s4_text').innerHTML = 'Switch Targets: ' + temp;
  document.getElementById('score4').width = scores[3];

  modal.style.display = 'block';
  ACTIVITY_LOG.push([id, attempt, 'VIEW_SCORES', '0', performance.now().toString()]);
};

// When the user clicks the button, open the modal
tut_btn.onclick = function () {
  pp = get_params();
  var tID = pp.slice(0, 4).join('');
  tut_pic.style.backgroundImage = 'url(Images/tutorial_' + tID + '.png)';
  tut_modal.style.display = 'block';
  ACTIVITY_LOG.push([id, attempt, 'RULES', '0', performance.now().toString()]);
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal.style.display = 'none';
  OLM_END_TIME = performance.now();
  ACTIVITY_LOG.push([id, attempt, 'VIEW_SCORES', '1', performance.now().toString()]);
  olm_time += OLM_END_TIME - OLM_START_TIME;
  var acc = document.getElementsByClassName('accordion');
  reset_table_background();
  for (var i = 0; i < acc.length; i++) acc[i].nextElementSibling.style.display = 'none';
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  tut_modal.style.display = 'none';
  ACTIVITY_LOG.push([id, attempt, 'RULES', '1', performance.now().toString()]);
};

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//  if (event.target == modal || event.target == tut_modal) {
//	modal.style.display = "none";
//	tut_modal.style.display = "none";
// }
//}

// OLM plots
google.charts.load('current', {packages: ['corechart', 'line']});
//google.charts.setOnLoadCallback(drawCurveTypes);
function drawCurveTypes() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Round');
  data.addColumn('number', 'Game Score');
  data.addColumn('number', 'Points Received');

  var data2plot = [];
  for (var i = 0; i < table_entry.length; i++) {
    if (table_entry[i][skill2plot + 1] == 1) {
      var tmp = [table_entry[i][0], table_entry[i][7], table_entry[i][8]];
      data2plot.push(tmp);
    }
  }

  data.addRows(data2plot);

  var options = {
    hAxis: {
      title: 'Round',
    },
    vAxis: {
      title: 'Scores',
    },

    chartArea: {
      // leave room for y-axis labels
      width: '80%',
    },
    legend: {
      position: 'top',
    },
    width: '100%',
  };

  // for each plot visualize values
  var ch = document.getElementsByClassName('graph')[skill2plot];
  //for (var i = 0; i < ch.length; i++){
  var chart = new google.visualization.LineChart(ch);
  chart.draw(data, options);
  //}
}

window.onbeforeunload = function (e) {
  e = e || window.event;
  // For IE and Firefox prior to version 4
  if (e) {
    e.returnValue = 'Sure?';
  }
  // For Safari
  return 'Sure?';
};

window.onunload = function (e) {
  e = e || window.event;
  // For IE and Firefox prior to version 4
  if (e) {
    e.returnValue = 'Sure?';
  }
  // For Safari
  return 'Sure?';
};
