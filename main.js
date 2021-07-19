const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const mail = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

const inputArray = [username, password, password2, mail];

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

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm(inputArray);
});

clearBtn.addEventListener('click', e => {
    e.preventDefault();
    inputArray.forEach(el =>
        el.value = ''
    );
});