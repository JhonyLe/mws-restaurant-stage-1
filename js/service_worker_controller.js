if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service_worker.js?w=12').then(function(reg) {
        // регистрация сработала
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
        // регистрация прошла неудачно
        console.log('Registration failed with ' + error);
    });
};