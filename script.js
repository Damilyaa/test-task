document.addEventListener('DOMContentLoaded', function () {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');
    const birthDay = document.getElementById('birth-day');
    const submitButton = document.getElementById('form-button');

    const firstNameError = document.getElementById('first-name-error');
    const lastNameError = document.getElementById('last-name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const passwordConfirmError = document.getElementById('password-confirm-error');
    const birthDayError = document.getElementById('birth-day-error');

    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    function validateFirstName() {
        if (!firstName.value.match(nameRegex) || firstName.value.length < 2 || firstName.value.length > 50) {
            firstName.classList.add('invalid');
            firstNameError.textContent = 'Имя должно содержать только буквы и быть от 2 до 50 символов.';
        } else {
            firstName.classList.remove('invalid');
            firstName.classList.add('valid');
            firstNameError.textContent = '';
        }
    }

    function validateLastName() {
        if (!lastName.value.match(nameRegex) || lastName.value.length < 2 || lastName.value.length > 50) {
            lastName.classList.add('invalid');
            lastNameError.textContent = 'Фамилия должна содержать только буквы и быть от 2 до 50 символов.';
        } else {
            lastName.classList.remove('invalid');
            lastName.classList.add('valid');
            lastNameError.textContent = '';
        }
    }

    function validateEmail() {
        if (!email.value.match(emailRegex)) {
            email.classList.add('invalid');
            emailError.textContent = 'Введите валидный адрес электронной почты.';
        } else {
            email.classList.remove('invalid');
            email.classList.add('valid');
            emailError.textContent = '';
        }
    }

    function validatePassword() {
        if (!password.value.match(passwordRegex)) {
            password.classList.add('invalid');
            passwordError.textContent = 'Пароль должен содержать минимум 8 символов, одну цифру, одну заглавную и одну строчную букву и один символ.';
        } else {
            password.classList.remove('invalid');
            password.classList.add('valid');
            passwordError.textContent = '';
        }
    }

    function validatePasswordConfirm() {
        if (password.value !== passwordConfirm.value) {
            passwordConfirm.classList.add('invalid');
            passwordConfirmError.textContent = 'Пароли не совпадают.';
        } else {
            passwordConfirm.classList.remove('invalid');
            passwordConfirm.classList.add('valid');
            passwordConfirmError.textContent = '';
        }
    }

    function validateBirthDay() {
        const birthDate = new Date(birthDay.value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            birthDay.classList.add('invalid');
            birthDayError.textContent = 'Возраст должен быть не менее 18 лет.';
        } else {
            birthDay.classList.remove('invalid');
            birthDay.classList.add('valid');
            birthDayError.textContent = '';
        }
    }

    function validateForm() {
        validateFirstName();
        validateLastName();
        validateEmail();
        validatePassword();
        validatePasswordConfirm();
        validateBirthDay();

        if (
            firstName.classList.contains('valid') &&
            lastName.classList.contains('valid') &&
            email.classList.contains('valid') &&
            password.classList.contains('valid') &&
            passwordConfirm.classList.contains('valid') &&
            birthDay.classList.contains('valid')
        ) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    firstName.addEventListener('input', validateForm);
    lastName.addEventListener('input', validateForm);
    email.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);
    passwordConfirm.addEventListener('input', validateForm);
    birthDay.addEventListener('input', validateForm);
});

document.addEventListener('DOMContentLoaded', function () {
    const signupPasswordInput = document.getElementById('password');
    const signupEyeIcon = document.getElementById('eye-icon');

    if (signupPasswordInput && signupEyeIcon) {
        signupEyeIcon.addEventListener('click', function () {
            if (signupPasswordInput.type === 'password') {
                signupPasswordInput.type = 'text';
                signupEyeIcon.src = 'assets/eye-on.png';
            } else {
                signupPasswordInput.type = 'password';
                signupEyeIcon.src = 'assets/eye-off.png';
            }
        });
    }

    const loginPasswordInput = document.getElementById('login-password');
    const loginEyeIcon = document.getElementById('login-eye-icon');

    if (loginPasswordInput && loginEyeIcon) {
        loginEyeIcon.addEventListener('click', function () {
            if (loginPasswordInput.type === 'password') {
                loginPasswordInput.type = 'text';
                loginEyeIcon.src = 'assets/eye-on.png';
            } else {
                loginPasswordInput.type = 'password';
                loginEyeIcon.src = 'assets/eye-off.png';
            }
        });
    }
});

document.getElementById('remember-me').addEventListener('click', function () {
    const checkboxImg = document.getElementById('checkbox-img');

    if (checkboxImg.src.includes('check-off.png')) {
        checkboxImg.src = 'assets/check-on.png';  
    } else {
        checkboxImg.src = 'assets/check-off.png'; 
    }
});
