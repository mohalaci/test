var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/done.html',
      url: 'done.html'
    },
    {
      path: '/undone.html',
      url: 'undone.html'
    }
  ],
  /*view: {
    iosDynamicNavbar: false,
  },*/
  // ... other parameters
});
var mainView = app.views.create('.view-main');

app.on('click', function (page) {
  // do something on page init
      var payButton = document.getElementById("payWithBarionButton");
      if (payButton != null) {
          payButton.addEventListener("click", function() {
              genPaymentId();
              },false
          );
      }
      var closeButton = document.getElementById("resultButton");
      if (closeButton != null) {
          closeButton.addEventListener("click", function(){
            closePlugin();
          }, false);
      }
      
      var backButton = document.getElementById("backButton");
      if (backButton != null) {
          backButton.addEventListener("click", function(){
            closePlugin();
          }, false);
      }
  }
);

function genPaymentId(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObject = JSON.parse(this.responseText);
     console.log(myObject.paymentId);
     var messageToPost = {'action':'Pay',
      'paymentId':myObject.paymentId};
      //if (navigator.platform.substr(0,2) === 'iP'){
      //iOS (iPhone, iPod or iPad)
      //var lte9 = /constructor/i.test(window.HTMLElement);
      //var nav = window.navigator, ua = nav.userAgent, idb = !!window.indexedDB;
      //if (ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1 && !nav.standalone){      
        //Safari (WKWebView/Nitro since 6+)
      //} else if ((!idb && lte9) || !window.statusbar.visible) {
        //UIWebView
      //} else
        if (window.webkit && window.webkit.messageHandlers){
        //WKWebView
          window.webkit.messageHandlers.barionPluginHandler.postMessage(JSON.stringify(messageToPost));
        } else {
          barionPluginHandler.postMessage(JSON.stringify(messageToPost));
        }
     
     
    }
  };
  xhttp.open("GET", "https://plugin.mobileappdev.org/genpayment", true);
  xhttp.send();
}

function successfulPaymentCallback(data){
  window.location.href = "/done.html"
  console.log("DONE: eztet kaptuk a mobiltol nativan:");
  console.log(data);
}

function unSuccessfulPaymentCallback(data){
  window.location.href = "/undone.html"
  console.log("UNDONE: eztet kaptuk a mobiltol nativan:");
  console.log(data);
}

function closePlugin(){
  var messageToPost = {'action':'close'};
  if (window.webkit && window.webkit.messageHandlers){
    //WKWebView
    window.webkit.messageHandlers.barionPluginHandler.postMessage(JSON.stringify(messageToPost));      
  } else {
    barionPluginHandler.postMessage(JSON.stringify(messageToPost));
  }
  
}
