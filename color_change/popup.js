document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="#2ED6E6"'
    });
  }, false);
}, false);
