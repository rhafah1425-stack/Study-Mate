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
// Dynamic Password Rules

const passwordInput = document.getElementById("signupPassword");
const rulesContainer = document.getElementById("passwordRules");

const passwordRules = [
    {
        text: "At least 6 characters",
        check: password => password.length >= 6
    },
    {
        text: "Contains letters",
        check: password => /[a-zA-Z]/.test(password)
    },
    {
        text: "Contains numbers",
        check: password => /[0-9]/.test(password)
    }
];

if (passwordInput && rulesContainer) {

    let ruleElements = [];

    for (let i = 0; i < passwordRules.length; i++) {
        let rule = document.createElement("p");
        rule.textContent = "✗ " + passwordRules[i].text;

        rulesContainer.appendChild(rule);
        ruleElements.push(rule);
    }

    passwordInput.addEventListener("input", function() {

        let password = passwordInput.value;

        for (let i = 0; i < passwordRules.length; i++) {

            if (passwordRules[i].check(password)) {
                ruleElements[i].textContent =
                    "✓ " + passwordRules[i].text;
            } else {
                ruleElements[i].textContent =
                    "✗ " + passwordRules[i].text;
            }

        }
    });
}