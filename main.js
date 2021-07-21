const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const mail = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const closeBtn = document.querySelector('.close');
const popup = document.querySelector('.popup');

const inputArray = [username, password, password2, mail];

const checkMail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
        clearError(email);
    } else {
        showError(email, 'Mail jest nie poprawny')
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Passwords are different.');
    }
};

const checkLength = (input, minValue) => {
    if (input.value.length < minValue) {
        showError(input, `${input.placeholder} consist min ${minValue} character`)
    }
};

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error_text');
    formBox.classList.add('error');
    errorMsg.textContent = msg;
};

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder);
        } else {
            clearError(el);
        }
    })
};

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form_box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })

    if (errorCount === 0) {
        popup.classList.add('popup-show');
    }
};

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm(inputArray);
    checkLength(username, 3);
    checkLength(password, 8);
    checkPassword(password, password2);
    checkMail(mail);
    checkErrors();
});

clearBtn.addEventListener('click', e => {
    e.preventDefault();
    inputArray.forEach(el => {
        el.value = '';
        clearError(el);
    });
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('popup-show');
})