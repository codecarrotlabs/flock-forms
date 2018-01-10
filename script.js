const fname = document.getElementById("fname").value;
const femail = document.getElementById("femail").value;
const fnumber = document.getElementById("fnumber").value;
const fhook = document.getElementById("fhook").value;

function postDataToWebhook() {
  //get the values needed from the passed in json object
  var userName= fname;
  var userEmail = femail;
  var userMobile = fnumber;
  //url to your webhook
  var webHookUrl = fhook;
  
  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var oReq = new XMLHttpRequest();
  var myJSONStr = payload = {
    "text": "New user filled the form on website",
    "attachments": [{
      //"description": "A little longer description", //optional
      "views": {
        "flockml": "<flockml><strong>Name:</strong> " + fname + "<br/><strong>Email Address:</strong> " + femail + "<br/><strong>Mobile: </strong> " + fnumber + "</flockml>"
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
