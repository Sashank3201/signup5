function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const signupMessage = document.getElementById('signupMessage');

    // Clear previous messages
    signupMessage.textContent = ""; 

    if (password !== confirmPassword) {
        signupMessage.textContent = "Passwords do not match!";
        signupMessage.style.color = "red"; // Set message color to red for error
        return false;
    }

    // Simulate a signup action (you can replace this with a backend call)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    signupMessage.textContent = "Signup successful! You can now login.";
    signupMessage.style.color = "green"; // Set message color to green for success

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm_password').value = '';

    // Redirect to login page after a brief delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000); // Redirect after 2 seconds

    return false;
}

function login() {
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Clear previous messages
    loginMessage.textContent = ""; 

    // Simulate a login action by checking against stored credentials
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green"; // Set message color to green for success

        // Clear the input fields
        document.getElementById('login_email').value = '';
        document.getElementById('login_password').value = '';

        // Optionally redirect to another page after login
        setTimeout(() => {
            // window.location.href = 'welcome.html'; // Redirect after successful login
        }, 2000); // Optional redirect after 2 seconds
    } else {
        loginMessage.textContent = "Invalid email or password!";
        loginMessage.style.color = "red"; // Set message color to red for error
    }
    return false;
}
