document.addEventListener('DOMContentLoaded', function(){
    sendRequest();
});

function sendRequest() {
  const publicKey = '6LcWXc8gAAAAAMpgB0-7TzTELlr8f7T2XiTrexO5';
  getRecaptchaToken(publicKey, makeAjaxCall1, errorCapture);
}

function makeAjaxCall1(token) {
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    var url = 'https://webhook.site/288463c6-f9b9-4a44-aef4-69294e7ae437';
    var data = JSON.stringify({token: token})

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: data
    });


  // window.clearInterval(window.interval_submit_ajax);
  // window.interval_submit_ajax = window.setInterval(sendRequest, 60000);
  //grecaptcha.reset();
  //location.reload(true);

  console.log('Result was sent')

  return false;
}

function errorCapture(err) {
  return false;
}