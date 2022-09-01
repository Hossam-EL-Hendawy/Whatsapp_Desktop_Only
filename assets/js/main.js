function popup1() {
    swal("Sorry", "there is no backend just frontend", "error");
}

function popup2() {
    swal("Hossam EL Hendawy", "This is my account but you cannot access 😀");
}

function popup3() {
    swal("Status 🎁", "sorry you cannot add story now");
}

function popup4() {
    swal("New chat!!!", "How! I told you that you cannot access 😏");
}

function popup5() {
    swal("No menu", "just rate my page ok 🙂");
}


new jBox('Modal', {
    attach: '#num1',
    ajax: {
        url: 'https://reqres.in/api/users?delay=2',
        data: {
            id: 1
        },
        reload: 'strict',
        setContent: false,
        success: function(response) {
            console.log('jBox AJAX response', response);
            this.setContent('<b>Any one is not available now </b><br>cause there is no server 😂');
        },
        error: function() {
            this.setContent('<b style="color: #d33">there is no internet connection. 🙂</b>');
        }
    }
});

new jBox('Modal', {
    attach: '#num2',
    ajax: {
        url: 'https://reqres.in/api/users?delay=2',
        data: {
            id: 1
        },
        reload: 'strict',
        setContent: false,
        success: function(response) {
            console.log('jBox AJAX response', response);
            this.setContent('<b>Any one is not available now </b><br>cause there is no server 😂');
        },
        error: function() {
            this.setContent('<b style="color: #d33">there is no internet connection. 🙂</b>');
        }
    }
});

new jBox('Modal', {
    attach: '#num3',
    ajax: {
        url: 'https://reqres.in/api/users?delay=2',
        data: {
            id: 1
        },
        reload: 'strict',
        setContent: false,
        success: function(response) {
            console.log('jBox AJAX response', response);
            this.setContent('<b>Any one is not available now </b><br>cause there is no server 😂');
        },
        error: function() {
            this.setContent('<b style="color: #d33">there is no internet connection. 🙂</b>');
        }
    }
});

new jBox('Modal', {
    attach: '#num4',
    ajax: {
        url: 'https://reqres.in/api/users?delay=2',
        data: {
            id: 1
        },
        reload: 'strict',
        setContent: false,
        success: function(response) {
            console.log('jBox AJAX response', response);
            this.setContent('<b>Web developement is not available now </b><br>cause there is no server 😂');
        },
        error: function() {
            this.setContent('<b style="color: #d33">there is no internet connection. 🙂</b>');
        }
    }
});

function popup55() {
    new AWN().info('<b>you need connection</b>', { durations: { error: 0 } })



}