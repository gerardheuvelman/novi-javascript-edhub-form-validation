const signUpForm = document.getElementById('sign-up-form');
signUpForm.addEventListener('submit',handleFormSubmit)

const usernameInputField = document.getElementById('input-username');
const passwordInputField = document.getElementById('input-password');

const uValidation = document.getElementById('validation-username')
const pValidation = document.getElementById('validation-password')

usernameInputField.addEventListener('keyup', checkUsername);
passwordInputField.addEventListener('keyup', checkPassword);

function checkUsername(e) {
    if (e.target.value.includes('@')) {
        uValidation.textContent = 'Gebruikersnaam mag geen @ bevatten';
    } else {
        uValidation.textContent = '';
    }
}

function checkPassword(e) {
    if (e.target.value === '' || e.target.value.length >= 6) {
        pValidation.textContent = '';
    } else {
        pValidation.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    console.log('het formulier wordt verstuurd');
}

