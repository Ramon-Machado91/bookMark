/* Hambuguer menu */

const hamburguer = document.querySelector('#navHam');
const menuBlue = document.querySelector('#hamburguerNav')
const closeIcon= document.querySelector('#close')

hamburguer.addEventListener('click',()=>{
    menuBlue.classList.remove('hidden')
})
closeIcon.addEventListener('click',()=>{
    menuBlue.classList.add('hidden')
})

/* Tab section */
const imagens = document.querySelectorAll('.imagem');
const mensagens = document.querySelectorAll('.descriptionContainer');
const abas = document.querySelectorAll('.tab')



function mudaAba(index1, index2, index3){
    imagens[index1].classList.remove('hidden');
    imagens[index2].classList.add('hidden')
    imagens[index3].classList.add('hidden');
    mensagens[index1].classList.remove('hidden');
    mensagens[index2].classList.add('hidden')
    mensagens[index3].classList.add('hidden');
    abas[index1].classList.add('active');
    abas[index2].classList.remove('active')
    abas[index3].classList.remove('active');
    
    
}

/* Accordeon menu */

const perguntas = document.querySelectorAll(".question");

perguntas.forEach(element => {
    element.addEventListener('click',()=>{
    element.classList.toggle('ativo')
    const itemAtivo = querySelector('.ativo')
    if(itemAtivo){
        element.classList.remove('ativo')
    }
    
    })
});

/* Email validate */

const email = document.getElementById('email');
const emailField = document.querySelector('.email-field');
const errorMessage = document.querySelector('.error-message');
const errorIcon= document.getElementById('redIcon')
const submitButton =document.getElementById('submitButton')

console.log(email, emailField, errorMessage, errorIcon,submitButton)

submitButton.addEventListener('submit', function(event){
    
    const emailValidar = email.value;

    if(!isValueEmail(emailValidar)){
        event.preventDefault();
        errorMessage.classList.remove('hidden');
        errorMessage.classList.remove('hidden')

    }
})

function isValueEmail(emailValidar){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailValidar)
}


