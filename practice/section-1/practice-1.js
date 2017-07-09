'use strict';

function collectSameElements(collectionA, collectionB) {
	var answer = [];
	
	for(var i=0;i<collectionA.length;i++){
		for(var j=0;j<collectionB.length;j++){
			if(collectionA[i]==collectionB[j])
					answer.push(collectionA[i]);
		}
	}
  return answer;
}
