var session  = 
	[
		{ 
			"id" : 1,
			"round": 1. 
			"tspots" : [3,4,3,5,4,5,3,4,5,4,3,5,4,3,4,5,3,4,3,0],
			"ttypes" : [2,4,1,4,2,4,2,3,1,2,2,3,3,1,2,3,2,4,1,2],
			"tcolors" : [1,1,1,2,2,2,1,1,1,1,2,2,2,1,1,1,2,2,1,1],
			"shoot" : [0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
			"move" : [0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
			"tselection" : [1,0,0,0,1,3], 
			"OLM": [total, t, t1, t2, t3, t4], 
			"scores" : [s1, s2, s3,s4, game, points]
		},
		{ 
			"id" : 1,
			"round": 2. 
			"tspots" : [3,4,3,5,4,5,3,4,5,4,3,5,4,3,4,5,3,4,3,0],
			"ttypes" : [2,4,1,4,2,4,2,3,1,2,2,3,3,1,2,3,2,4,1,2],
			"tcolors" : [1,1,1,2,2,2,1,1,1,1,2,2,2,1,1,1,2,2,1,1],
			"shoot" : [0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
			"move" : [0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
			"tselection" : [1,0,0,0,1,3], 
			"OLM": [total, t, t1, t2, t3, t4], 
			"scores" : [s1, s2, s3,s4, game, points]
		},
		{ 
			"id" : 1, 
			"targets_spots" : [[2,3,1,...,3,2], [2,3,1,...,3,2], ....., [2,3,1,...,3,2]],
			"target_types" : [[2,3,1,...,3,2], [2,3,1,...,3,2], ....., [2,3,1,...,3,2]],
			"player_colors" : [[1,1,2,...,2,2,1], [1,1,2,...,2,2,1], ..., [1,1,2,...,2,2,1]],
			"shoot" : [[0,1,1,..., ,0,1],[0,1,1,..., ,0,1], ..., [0,1,1,..., ,0,1]],
			"move" : [[0,1,1,..., ,0,1],[0,1,1,..., ,0,1], ..., [0,1,1,..., ,0,1]],
			"tselection" : [[1,0,0,0,1,3], [1,0,1,0,2,3], ..., [1,1,0,1,1,2]],  
			"OLM": [[total, t, t1, t2, t3, t4]	, [total, t, t1, t2, t3, t4], ..., [total, t, t1, t2, t3, t4]], 
			"scores" : [[s1, s2, s3,s4, game, points], [s1, s2, s3,s4, game, points], ..., [s1, s2, s3,s4, game, points]]
		}, 
	];

// one activity log for the entire session, number of entries (activities) not fixed, depends on user activity
var activity_log = 
	[
		{
			"activity" : {"NEW ROUND", "VIEW_SCORE", "PRACTICE", "RULES", "R1", "R2", ...., "PLAY"}, 
			"status" : {0: "was_closed", 1: "was_open"}, 
			"timestamp" : time
		}
	]; 