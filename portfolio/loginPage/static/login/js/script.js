var login = document.querySelector(".login-card .login");
var signup = document.querySelector(".login-card .sign-up");
var loginForm = document.querySelector(".login-card .login form");
var signupForm = document.querySelector(".login-card .sign-up form");

function rotateToSignUp() {
    signup.classList.add("rotate-signup");
    signupForm.classList.remove("vanish");
    signupForm.classList.add("appear");
    login.classList.add("rotate-login");
    loginForm.classList.remove("appear");
    loginForm.classList.add("vanish");
}


function rotateToLogin() {
    login.classList.remove("rotate-login");
    loginForm.classList.remove("vanish");
    loginForm.classList.add("appear");
    signupForm.classList.remove("appear");
    signupForm.classList.add("vanish");
    signup.classList.remove("rotate-signup");
}
