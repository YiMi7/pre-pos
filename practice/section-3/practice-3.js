'use strict';

function createUpdatedCollection(collectionA, objectB) {

	var keys = [];
	var counts = [];
	var cnt = 0;
	var thiskey = collectionA[0];
	var ans = [];

	counts[0] = 1;
	keys[0] = thiskey;
	for(var i = 1; i < collectionA.length; i++){
		if(thiskey != collectionA[i][0]){
			keys.push(collectionA[i][0]);
			cnt++;
			thiskey = collectionA[i][0];
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
	for(var i = 0; i < ans.length; i++){
		for(var j = 0; j < objectB.value.length; j++){
			if(ans[i].key == objectB.value[j]){
				var mod = ans[i].count % 3;
				var x = ( ans[i].count - mod)/3
				ans[i].count = ans[i].count - x;
			}
		}
	}
	return ans;
}
