(function logOffEvent() {
    $('#logOffBtn').on('click', () => {
        //TODO
        //  logOffNotification('success', 'Logout Successful');

        setTimeout(function () {
            location.href = 'file:///C:/Users/suppo/Desktop/Table%20Easy%20Pay/git/login.html';
        }, 350);

        localStorage.removeItem('username');
    })
}());