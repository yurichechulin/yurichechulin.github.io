document.addEventListener('DOMContentLoaded', function(){
    fetch('https://webhook.site/288463c6-f9b9-4a44-aef4-69294e7ae437', {
        method: 'POST',
        mode: "no-cors",
        body: JSON.stringify({"batch_size": 12, "request_period": 12}),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {
            return console.log(response)
        })
});