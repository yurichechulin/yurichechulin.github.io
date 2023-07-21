document.addEventListener('DOMContentLoaded', function(){
    sendRequest();
});

function sendRequest() {
  const publicKey = '6LcWXc8gAAAAAMpgB0-7TzTELlr8f7T2XiTrexO5';
  getRecaptchaToken(publicKey, makeAjaxCall1, errorCapture);
}

function makeAjaxCall1(token) {
    fetch('http://p-tm-tokentanker.sd.infra/tokens', {
        method: 'POST',
        mode: "no-cors",
        headers:  { 'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            "created_at": Math.floor(Date.now() / 1000),
            "proxy": {
                "group_id": 1,
                "url": ""
            },
            "source": "dkbm.kbm.history",
            "token": token,
            "worker_uid": "da7cf524-3042-49a2-8324-36d138182666"
        })
    }).then((response) => {
        console.log('token was send')
    })

  window.clearInterval(window.interval_submit_ajax);
  window.interval_submit_ajax = window.setInterval(sendRequest, 60000);
  //grecaptcha.reset();
  //location.reload(true);

  return false;
}

function errorCapture(err) {
  return false;
}