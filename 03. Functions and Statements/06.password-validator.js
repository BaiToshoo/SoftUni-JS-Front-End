function passwordValidator(password){
    let isValid = true;
    let digits = 0;
    let isOnlyLettersAndDigits = true;
    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        isOnlyLettersAndDigits = false;
    }
    if (!isOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    digits = (password.match(/\d/g) || []).length;
    if (digits < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn'); // Password must be between 6 and 10 characters
passwordValidator('MyPass123'); // Password is valid
