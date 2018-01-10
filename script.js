function postDataToWebhook() {
  //get the values needed from the passed in json object
  var userName = document.getElementById("fname").value;
  var userEmail = document.getElementById("femail").value;
  var userMobile = document.getElementById("fnumber").value;
  //url to your webhook
  var webHookUrl = document.getElementById("fhook").value;

  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var oReq = new XMLHttpRequest();
  var myJSONStr = payload = {
    "text": "New user filled the form on website",
    "attachments": [{
      //"description": "A little longer description", //optional
      "views": {
        "flockml": "<flockml><strong>Name:</strong> " + userName + "<br/><strong>Email Address:</strong> " + userEmail + "<br/><strong>Mobile: </strong> " + userMobile + "</flockml>"
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
