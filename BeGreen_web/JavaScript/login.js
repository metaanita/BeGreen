
const btnSingIn = document.getElementById("sing-in");
const btnSingUp = document.getElementById("sing-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSingIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSingUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})


//-->Password-alert
const form = document.querySelector(".form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


form.addEventListener("submit", function (event) {
    if (!isValidPassword(password.value)) {
        event.preventDefault(); // Detiene el envío del formulario
        alert("La contraseña debe contener al menos 6 caracteres, incluyendo al menos un número o una letra mayúscula");
    }
});

function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(password);
}

