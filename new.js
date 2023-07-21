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
    var data = JSON.stringify({
        "created_at": 1257894000,
        "proxy": {
            "group_id": 22,
            "url": "socks4://111.111.111.111:4561"
        },
        "source": "dkbm.kbm.history",
        "token": token,
        "worker_uid": "da7cf524-3042-49a2-8324-36d138182666"
    })

    fetch(url, {
        method: 'POST',
        mode: "no-cors",
        headers: headers,
        body: data
    }).then((response) => {
        console.log('Result was sent')
    })

  // window.clearInterval(window.interval_submit_ajax);
  // window.interval_submit_ajax = window.setInterval(sendRequest, 60000);
  //grecaptcha.reset();
  //location.reload(true);

  return false;
}

function errorCapture(err) {
  return false;
}