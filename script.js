
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => field.innerText = '');
    let valid = true;
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        valid = false;
    }
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        valid = false;
    }
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must be 10 digits.';
        valid = false;
    }
    const age = parseInt(document.getElementById('age').value.trim(), 10);
    if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById('ageError').innerText = 'Age must be between 1 and 120.';
        valid = false;
    }
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters.';
        valid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        valid = false;
    }
    if (valid) {
        alert('Registration successful!');
    }
});
