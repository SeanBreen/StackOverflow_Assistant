window.onload = function() {
  document.getElementById('submit').onclick = function doStuff() {
    var inputElement = document.getElementById('inputURL')
    var inputURL = inputElement.value;
    if (inputURL.length != 0) {
      var stackLink = 'http://stackoverflow.com/search?q=';
      var url=stackLink+inputURL;
      url = url.replace(/ /g, "+");
      chrome.tabs.create({ url: url });
    };
    
  };
};
