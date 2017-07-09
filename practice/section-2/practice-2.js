'use strict';

function countSameElements(collection) {

	var keys = [];
	var counts = [];
	var cnt = 0;
	var thiskey = collection[0][0];
	var ans = [];

	counts[0] = 1;
	keys[0] = thiskey;
	for(var i = 1; i < collection.length; i++){
				
		if(thiskey != collection[i][0]){
			keys.push(collection[i][0]);
			cnt++;
			thiskey = collection[i][0];
			counts[cnt] = 1;
			}
		else{
			counts[cnt]++;
			}
		if(collection[i][1] == '-'){
			var x = collection[i].substring(2) - '0';
			counts[cnt] = counts[cnt] + x - 1;
		}
	}
	
	for(var i = 0; i <= cnt; i++){
		ans[i] = {};
		ans[i].key = keys[i];
		ans[i].count = counts[i];
	}

	return ans;
}
