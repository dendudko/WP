const axios = require('axios').default;
axios.all([
    axios.get('https://api.github.com/users/dendudko'),
    axios.get('https://api.github.com/users/Dreammary0')
])
    .then(response => {
        document.getElementById('text').innerText=('Login: '+ response[0].data.login+'\nDate created: '+ response[0].data.created_at);
        document.getElementById('text').innerText+=('\n\nLogin: '+ response[1].data.login+'\nDate created: '+ response[1].data.created_at);
    });