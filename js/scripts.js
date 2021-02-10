// Variables
const impUsuario = document.querySelector('#usuario');
const impPassword = document.querySelector('#password');
const button = document.querySelector('.btn-pwd');

// Event listeners
impUsuario.addEventListener('blur', handleBlur);
impPassword.addEventListener('blur', handleBlur);
impUsuario.addEventListener('focus', handleFocus);
impPassword.addEventListener('focus', handleFocus);
button.addEventListener('click', showPassword);
document.addEventListener('DOMContentLoaded', () => {
    const campoUsuario = impUsuario.parentElement;

    if (impUsuario.value) {
        hideLabel(campoUsuario);
    }
});

function handleBlur(e) {
    const campo = e.target.parentElement;

    if (!e.target.value && e.target.id === 'usuario') {
        showMessage(campo, 'Ingrese un email o un número de teléfono válido.');
        showLabel(campo);
        return;
    }
    if (!e.target.value && e.target.id === 'password') {
        showMessage(campo, 'La contraseña debe tener entre 4 y 60 caracteres.');
        showLabel(campo);
        return;
    }
    hideLabel(campo);
    cleanMessages(campo);
} 

function handleFocus(e) {
    const input = e.target;
    const campo = e.target.parentElement;

    if (input.id === 'usuario') {
        hideLabel(campo);
    } else {
        hideLabel(campo);
    }
}

function showMessage(campo, message) {
    cleanMessages(campo);
    const input = campo.querySelector('input');
    input.style.borderBottom = '2px solid #E87C03';
    const p = document.createElement('p');
    p.style.fontSize = '.8rem';
    p.style.color = '#E87C03';
    p.style.paddingLeft = '3px';
    p.textContent = message;
    campo.appendChild(p);
}

function cleanMessages(campo) {
    const input = campo.querySelector('input');
    input.style.borderBottom = 'none';
    while(campo.querySelector('p')) {
        const p = campo.querySelector('p');
        p.remove();
    }
}

function hideLabel(campo) {
    const label = campo.querySelector('label');
    label.style.fontSize = '.7rem';
    label.style.top = '.4rem';
}

function showLabel(campo) {
    const label = campo.querySelector('label');
    label.style.fontSize = '1rem';
    label.style.top = '1rem';
}

function showPassword() {
    if (button.classList.contains('mostrar')) {
        handlePassword(true);
        button.textContent = 'Ocultar';
        button.classList.remove('mostrar');
        button.classList.add('ocultar');
    } else {
        handlePassword(false);
        button.textContent = 'Mostrar';
        button.classList.remove('ocultar');
        button.classList.add('mostrar');
    }
}

function handlePassword(show) {
    if (show) {
        console.log('dentro');
        impPassword.setAttribute('type', 'text');
    } else {
        console.log('fuera');
        impPassword.setAttribute('type', 'password');
    }
}