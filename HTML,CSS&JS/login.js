$(function () {
    if (localStorage.getItem('username')) {
        notification('success', 'Welcome Back');

        setTimeout(function () {
            location.href = 'file:///C:/Users/suppo/Desktop/Table%20Easy%20Pay/git/table.html?date_from=&date_to=';
        }, 350);
    }
});

let loginEvent = (function () {
    $('body > div > form > input[type=button]:nth-child(4)').on('click', () => {
        let username = $('body > div > form > input[type=text]:nth-child(2)').val();
        let password = $('body > div > form > input[type=password]:nth-child(3)').val();
        loginUser(username, password);
    });
})();

function loginUser(username, password) {

    $.ajax({
        type: "POST",
        url: 'http://192.168.1.107/datavend/api.php',
        data: {
            mode: 'login',
            username,
            password
        },
        dataType: "json",
        success: function (data, textStatus) {
            callback();
        },
        error: () => {
            notification('error');
        }
    });
};

function notification(type, msg) {

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    if (type === 'success') {
        toastr.success(msg);
    } else if (type === 'error') {
        toastr.error(msg);
    }
};

function callback() {
    notification('success', 'Login successful');
    let currUser = $('body > div > form > input[type=text]:nth-child(2)').val();
    localStorage.setItem('username', currUser);
    setTimeout(function () {
        location.href = 'file:///C:/Users/suppo/Desktop/Table%20Easy%20Pay/git/table.html?date_from=&date_to=';
    }, 350);

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}