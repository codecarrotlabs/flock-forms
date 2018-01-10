function postDataToWebhook() {
  //get the values needed from the passed in json object
  var userName= "Yashu";
  var userPlatform= "Windows";
  var userEmail= "test@gmail.com";
  //url to your webhook
  var webHookUrl = "https://api.flock.com/hooks/sendMessage/d1e77e1b-29ec-4a01-a701-74120b214cf6";
  
  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var oReq = new XMLHttpRequest();
  var myJSONStr = payload = {
    "text": "New user filled a form",
    "attachments": [{
      // "description": "A little longer description", //optional
      "views": {
        "flockml": "<flockml><strong>Name:</strong> " + userName + "<br/><strong>Email Address:</strong> " + userEmail + "<br/><strong>Platform: </strong> " + userPlatform + "</flockml>"
      }
    }]
  };
  
//register method called after data has been sent method is executed
  oReq.addEventListener("load", reqListener);
  oReq.open("POST", webHookUrl,true);
  oReq.setRequestHeader('Content-Type', 'application/json');
  oReq.send(JSON.stringify(myJSONStr));
}
//callback method after webhook is executed
function reqListener () {
  console.log(this.responseText);
}
