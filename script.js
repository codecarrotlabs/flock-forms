function clearFields() {
  document.getElementById("fname").value = "";
  document.getElementById("femail").value = "";
  document.getElementById("fnumber").value = "";
  document.getElementById("fhook").value = "";
}

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
      "description": "A little longer description", //optional
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

// Clearing the fields after submiting the form
  clearFields();
}

//callback method after webhook is executed
function reqListener () {
  console.log(this.responseText);
}
