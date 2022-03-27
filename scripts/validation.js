const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const firstNameError = document.querySelector('#firstName + span');
const lastName = document.getElementById('lastName');
const lastNameError = document.querySelector('#lastName + span');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span');

firstName.addEventListener('input', function(e){
    if(firstName.validity.valid) {
        firstNameError.textContent = ' ';
        firstNameError.className ='error';
     } else {
        showError();
    }
});

lastName.addEventListener('input', function (e) {
    if(lastName.validity.valid) {
        lastNameError.textContent = ' ';
        lastNameError.className = 'error';
    } else {
        showError();
    }
});


email.addEventListener('input', function(e)    {
    if(email.validity.valid){
        emailError.textContent = ' ';
        emailError.className = 'error';
       

    } else {
        showError();
    }   
});

password.addEventListener('input', function (e) {
   if(password.validity.valid){
    passwordError.textContent = ' ';
    passwordError.className = 'error';

   } else {
        showError();
    }
});

form.addEventListener('submit', function(e)    {

    if(!firstName.validity.valid){
        showError();
        e.preventDefault();
    } else if (!lastName.validity.valid) {
        showError();
        e.preventDefault();
    } else if (!email.validity.valid){
        showError();
        e.preventDefault();
    } else if (!password.validity.valid)  {
        showError();
        e.preventDefault();
    }
   
});


function showError()    {

    if(firstName.validity.valueMissing) {
        firstNameError.textContent = 'First Name cannot be empty';  
        firstNameError.className = 'error';
    };
     
    
    if (lastName.validity.valueMissing) {
        lastNameError.textContent = 'Last Name cannot be empty';
        lastNameError.className = 'error';
    };

    if(email.validity.valueMissing) {
        emailError.textContent = 'Email cannot be empty';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Looks like this is not an email';   
    };
    emailError.className = 'error';

    if(password.validity.valueMissing){
        passwordError.textContent = 'Password cannot be empty';
        passwordError.className = 'error';
    }
    

};




        
    



