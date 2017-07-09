'use strict';

function countSameElements(collection) {
	var names = [];
	var summarys = [];
	var cnt = 0;
	var thisname = collection[0];
	var ans = [];

	summarys[0] = 1;
	names[0] = thisname;
	for(var i = 1; i < collection.length; i++){
		if(thisname != collection[i][0]){
			names.push(collection[i][0]);
			cnt++;
			thisname = collection[i][0];
			summarys[cnt] = 1;
			}
		else{
			summarys[cnt]++;
			}
		if(collection[i][1] == '-' || collection[i][1] == ':'){
			var x = collection[i].substring(2) - '0';
			summarys[cnt] = summarys[cnt] + x - 1;
		}
		else if(collection[i][1] == '['){
			var r = collection[i].indexOf(']');
			var x = collection[i].substring(2,r) - '0';
			summarys[cnt] = summarys[cnt] + x - 1;
		}
	}
	
	for(var i = 0; i <= cnt; i++){
		ans[i] = {};
		ans[i].name = names[i];
		ans[i].summary = summarys[i];
	}
	return ans;
}
