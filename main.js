document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorElement = document.getElementById('password-error');

    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match';
    } else {
        errorElement.textContent = '';
        alert('Account created successfully!');
    }
});