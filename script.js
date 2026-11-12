// Login Form Validation
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please fill in all fields!");
        } 
        else if (password.length < 6) {
            alert("Password must be at least 6 characters!");
        } 
        else {
            alert("Login successful! Welcome to StudyMate.");
        }
    });
}

// Sign Up Form Validation
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("signupEmail").value.trim();
        let password = document.getElementById("signupPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (!fullname  ||!email || !password || !confirmPassword) {
            alert("Please fill in all fields!");
        }
        else if (password.length < 6) {
            alert("Password must be at least 6 characters!");
        }
        else if (password !== confirmPassword) {
            alert("Passwords do not match!");
        }
        else {
            alert("Account created successfully!");
        }
    });
}