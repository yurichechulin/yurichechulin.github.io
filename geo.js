document.addEventListener('DOMContentLoaded', function(){
  let user = {
    name: 'John',
    surname: 'Smith'
  };

   fetch('https://webhook.site/288463c6-f9b9-4a44-aef4-69294e7ae437', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
});
