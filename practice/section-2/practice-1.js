'use strict';

function countSameElements(collection) {
	var keys = [];
	var counts = [];
	var cnt = 0;
	var thiskey = collection[0];
	var ans = [];

	counts[0] = 1;
	keys[0] = thiskey;
	for(var i = 1; i < collection.length; i++){
		if(thiskey != collection[i]){
			keys.push(collection[i]);
			cnt++;
			thiskey = collection[i];
			counts[cnt] = 1;
			}
		else{
			counts[cnt]++;
			}
	}
	
	for(var i = 0; i <= cnt; i++){
		ans[i] = {};
		ans[i].key = keys[i];
		ans[i].count = counts[i];
	}
	return ans;
}
