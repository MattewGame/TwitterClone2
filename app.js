let registrationModal = document.getElementById('registrationModal');

function openRegistrationModal() {
    registrationModal.style.display = 'block';
}

function closeRegistrationModal() {
    registrationModal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    displayStatuses();
});

function registerUser() {
    let username = document.getElementById('usernameInput').value;
    let password = document.getElementById('passwordInput').value;

    if (username === '' || password === '') {
        alert('Введите имя пользователя и пароль');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
        alert('Пользователь уже зарегистрирован');
        return;
    }

    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));

    alert('Пользователь зарегистрирован');
    document.getElementById('usernameInput').value = '';
    document.getElementById('passwordInput').value = '';

    closeRegistrationModal();
}

// Дополнительный код остается таким же


document.addEventListener('DOMContentLoaded', function() {
    displayStatuses();
});

function addStatus() {
    let username = prompt('Введите ваше имя пользователя:');
    let password = prompt('Введите ваш пароль:');

    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] && users[username] === password) {
        let statusInput = document.getElementById('statusInput').value;

        if (statusInput === '') {
            alert('Введите текст статуса');
            return;
        }

        let statuses = JSON.parse(localStorage.getItem('statuses')) || [];
        statuses.push({ username: username, status: statusInput });
        localStorage.setItem('statuses', JSON.stringify(statuses));

        displayStatuses();
        document.getElementById('statusInput').value = '';
    } else {
        alert('Неверное имя пользователя или пароль');
    }
}

function displayStatuses() {
    let statuses = JSON.parse(localStorage.getItem('statuses')) || [];

    let statusList = document.getElementById('statusList');
    statusList.innerHTML = '';

    statuses.forEach(function(status, index) {
        let li = document.createElement('li');
        li.textContent = `${status.username}: ${status.status}`;
        statusList.appendChild(li);
    });
}

