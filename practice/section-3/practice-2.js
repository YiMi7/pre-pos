'use strict';

function createUpdatedCollection(collectionA, objectB) {

	for(var i = 0; i < collectionA.length; i++){
		for(var j = 0; j < objectB.value.length; j++){
			if(collectionA[i].key == objectB.value[j]){
				var mod = collectionA[i].count % 3;
				var x = ( collectionA[i].count - mod)/3
				collectionA[i].count = collectionA[i].count - x;
			}
		}
	}
	return collectionA;
}
