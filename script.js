var loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function () {
    gapi.auth2.getAuthInstance().signIn();
});

function onSignIn(googleUser) {
    // Usuário logado com sucesso
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Nome: ' + profile.getName());
    console.log('Imagem: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

// Carrega o SDK do Facebook
window.fbAsyncInit = function () {
    FB.init({
        appId: '{app-id}',
        cookie: true,
        xfbml: true,
        version: 'v12.0'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log('Logged in and authenticated');
        testAPI();
    } else {
        console.log('Not authenticated');
    }
}

function testAPI() {
    FB.api('/me?fields=name,email,birthday,location', function (response) {
        if (response && !response.error) {
            console.log(response);
        }
    })
}

document.getElementById('loginBtn').addEventListener('click', function () {
    FB.login(statusChangeCallback);
});
