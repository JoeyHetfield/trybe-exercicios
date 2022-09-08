let button = document.getElementById('botao-envio')
const agreement = document.getElementById('checkbox2')

function validation() {
    const email = document.getElementById('email')
    const invalidEmail = email.length < 10 || email.length > 50

    if (invalidEmail) {
        return false
    } else {
        return true

    }
}

function allowForms() {
    button.disabled = !agreement.checked

}

window.onload = function () {
    agreement.addEventListener('change', allowForms)


}


//Isso desativaria o botão de submit
 function SendButton () {

    const ultraValidation = validation();
    if (ultraValidation === false){
        alert('Dados inválidos')
    } else {
        alert('Dados enviados com sucesso!')
    }
}
 button.addEventListener('click', SendButton)