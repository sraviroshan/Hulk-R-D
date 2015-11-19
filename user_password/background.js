chrome.extension.onRequest.addListener(function(request, sender, callback) {
    switch (request.name) {
         case 'form_submit':
            var data = request.data;
             // do something with your form credentials.
			chrome.tabs.create({url:"popup.html"});
             break;
     }
});