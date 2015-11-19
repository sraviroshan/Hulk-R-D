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

function mychrome_storage_local_get(items, callback){
	console.log('inside my chrome storage get');
	return chrome.storage.local.get(items, callback);
}

// chrome.runtime.sendMessage(string extensionId, any message, object options, function responseCallback)

function mychrome_runtime_sendmessage(extensionId, any_message, any_options, responseCallback){
	console.log("inside mychrome runtime sendmessage");
	return chrome.runtime.sendMessage(extensionId, any_message, any_options, responseCallback);
}


a_funct("ahjdhjashfdja" );