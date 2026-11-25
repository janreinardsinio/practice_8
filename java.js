const form = document.getElementById("user-form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const country = document.getElementById("country");
const terms = document.getElementById("terms");

const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    successMessage.textContent = "";

    let valid = true;

    // Username Validation
    if (username.value.trim().length < 3) {

        document.getElementById("username-error").textContent =
            "Username must be at least 3 characters.";

        valid = false;
    }

    // Email Validation
    if (!email.value.includes("@") || !email.value.includes(".")) {

        document.getElementById("email-error").textContent =
            "Email must contain @ and .";

        valid = false;
    }

    // Password Validation
    if (password.value.length < 6) {

        document.getElementById("password-error").textContent =
            "Password must be at least 6 characters.";

        valid = false;
    }

    // Country Validation
    if (country.value === "") {

        document.getElementById("country-error").textContent =
            "Please select your country.";

        valid = false;
    }

    // Terms Validation
    if (!terms.checked) {

        document.getElementById("terms-error").textContent =
            "You must agree to the Terms and Conditions.";

        valid = false;
    }

    // Form Result
    if (valid) {

        successMessage.textContent =
            "Registration successful! All fields are valid.";

        form.reset();

    }

});