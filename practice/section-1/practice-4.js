'use strict';

function collectSameElements(collectionA, objectB) {
  var answer = [];

	for(var i=0;i<collectionA.length;i++){
		for(var j=0;j<objectB.value.length;j++){
			if(collectionA[i].key === objectB.value[j])
					answer.push(collectionA[i].key);
		}
	}
	return answer;
}
