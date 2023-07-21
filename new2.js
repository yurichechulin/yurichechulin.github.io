document.addEventListener('DOMContentLoaded', function(){
    sendRequest();
});

function sendRequest() {
  const publicKey = '6LcWXc8gAAAAAMpgB0-7TzTELlr8f7T2XiTrexO5';
  getRecaptchaToken(publicKey, makeAjaxCall1, errorCapture);
}

async function makeAjaxCall1(token) {
    let response = await fetch('http://p-tm-tokentanker.sd.infra/tokens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name : 'lorem'})
    });

    let result = await response.json();

    alert(result.message);

    return false;
}

function errorCapture(err) {
  return false;
}