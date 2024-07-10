document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const registerBtn = document.getElementById('registerBtn');
    const backBtn = document.getElementById('backBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginSection = document.querySelector('.login-form');
    const registerSection = document.querySelector('.register-form');
    const logoutSection = document.querySelector('.logout');

    let users = [];

    registerBtn.addEventListener('click', () => {
        loginSection.classList.add('hidden');
        registerSection.classList.remove('hidden');
    });

    backBtn.addEventListener('click', () => {
        registerSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.username === username);
        if (user && user.password === password) {
            alert('Login successful!');
            loginSection.classList.add('hidden');
            logoutSection.classList.remove('hidden');
        } else {
            alert('Invalid username or password.');
        }
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        if (newUsername && newPassword.length >= 8) {
            if (users.find(user => user.username === newUsername)) {
                alert('Username already exists.');
            } else {
                users.push({ username: newUsername, password: newPassword });
                alert('Registration successful!');
                registerSection.classList.add('hidden');
                loginSection.classList.remove('hidden');
            }
        } else {
            alert('Password must be at least 8 characters long.');
        }
    });

    logoutBtn.addEventListener('click', () => {
        logoutSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    });
});
