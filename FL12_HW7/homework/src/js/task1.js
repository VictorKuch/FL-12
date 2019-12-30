let email = prompt('input your email', '');

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length <= 5) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
    alert('I don’t know you');
} else {
    let password = prompt('input your password', '');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass') {
        let newPassword = confirm('Do you want to change your password?');
        if (!newPassword) {
            alert('You have failed the change.');
        } else if (newPassword) {
            let oldPassword = prompt('input your password', '');
            if (oldPassword === null || oldPassword === '') {
                alert('Canceled');
            } else if (email === 'user@gmail.com' && password === oldPassword ||
                email === 'admin@gmail.com' && password === oldPassword) {
                let newInputPassword = prompt('Please input new password', '');
                if (newInputPassword === null || newInputPassword === '') {
                    alert('Canceled');
                } else if (newInputPassword.length < 6) {
                    alert('It’s too short password. Sorry');
                } else {
                    let passwordCheck = prompt('input new password again', '');
                    if (passwordCheck === newInputPassword) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            }

        }
    } else {
        alert('Wrong password');
    }
}

