var session_data  = 
	[
		{ 
			"id" : 1,
			"round": 1,
			"attempt": 3, 
			"practice": 0,
			"targetID": 23,
			"shoot" : [0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
			"move" : [0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
			"tselection" : [1,0,0,0,1,3], 
			"OLM": 123, 
			"scores" : [s1, s2, s3,s4, game, points]
		}
	];

// one activity log for the entire session, number of entries (activities) not fixed, depends on user activity
var activity_log = 
	[
		{
			"id": 1,
			"round": 1
			"attempt": 3, 
			"activity" : {"NEW ROUND", "VIEW_SCORE", "PRACTICE", "RULES", "R1", "R2", ...., "PLAY"}, 
			"status" : {0: "was_closed", 1: "was_open"}, 
			"timestamp" : 123
		}
	]; 