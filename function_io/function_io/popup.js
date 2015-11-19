// for extrect elememt from chrome local storage
console.log('popup.js page'); 
	mychrome_storage_local_set(null , function(items) {
    
    	console.log(items);

    	for (var i in items){
    		console.log(i + " s "+items[i]);
    		var para = document.createElement("p");
		var node = document.createTextNode(i + ":: "+items[i]);
		para.appendChild(node);
		var element = document.getElementById("data");
		element.appendChild(para);
    	}
    	

    	// document.write(items);
	});

document.addEventListener('DOMContentLoaded', function() {
    var clear = document.getElementById('clear');
    clear.addEventListener('click', function() {
        alert("are you sure !");
        chrome.storage.local.clear();
        location.reload();
    });
});