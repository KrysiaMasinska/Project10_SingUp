const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const mail = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

clearBtn.addEventListener('click', e => {
    e.preventDefault();
    [username, password, password2, mail].forEach(el =>
        el.value = ''
    );
});