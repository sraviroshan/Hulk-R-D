function b_funct(string_a, massage_b, obj_c, funct_resp){
	console.log('inside b_funct');
	console.log(' string_a = ' + string_a);
	console.log(' massage_b = ' + massage_b);
	console.log(' obj_c = ' + obj_c);
	console.log(' funct_resp = ' + funct_resp);
}

function a_funct( string_a, massage_b, obj_c, funct_resp){
	console.log('inside a_funct ');

	return b_funct(string_a, massage_b, obj_c, funct_resp);
}


 function mychrome_storage_local_set(items, callback){
 	console.log('inside my chrome storage set');
 	 return chrome.storage.local.set(items, callback);
 }

function mychrom_storage_local_get(items, callback){
	console.log('inside my chrome storage get');
	return mychrome_storage_local_set(items, callback);
}

a_funct("ahjdhjashfdja" );