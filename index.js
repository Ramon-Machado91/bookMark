const hamburguer = document.querySelector('#navHam');
const menuBlue = document.querySelector('#hamburguerNav')
const closeIcon= document.querySelector('#close')

hamburguer.addEventListener('click',()=>{
    menuBlue.classList.remove('hidden')
})
closeIcon.addEventListener('click',()=>{
    menuBlue.classList.add('hidden')
})

const imagens = document.querySelectorAll('.imagem');
const mensagens = document.querySelectorAll('.descriptionContainer');
const abas = document.querySelectorAll('.tab')

function mudaAba1(){
    imagens[0].classList.remove('hidden');
    imagens[1].classList.add('hidden')
    imagens[2].classList.add('hidden');
    mensagens[0].classList.remove('hidden');
    mensagens[1].classList.add('hidden')
    mensagens[2].classList.add('hidden');
    abas[0].classList.add('active');
    abas[1].classList.remove('active')
    abas[2].classList.remove('active');
    
}

function mudaAba2(){
    imagens[0].classList.add('hidden');
    imagens[1].classList.remove('hidden')
    imagens[2].classList.add('hidden');
    mensagens[0].classList.add('hidden');
    mensagens[1].classList.remove('hidden')
    mensagens[2].classList.add('hidden');
    abas[0].classList.remove('active');
    abas[1].classList.add('active')
    abas[2].classList.remove('active');
    
}

function mudaAba3(){
    imagens[0].classList.add('hidden');
    imagens[1].classList.add('hidden')
    imagens[2].classList.remove('hidden');
    mensagens[0].classList.add('hidden');
    mensagens[1].classList.add('hidden')
    mensagens[2].classList.remove('hidden');
    abas[0].classList.remove('active');
    abas[1].classList.remove('active')
    abas[2].classList.add('active');
    
}

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

const email = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const erroIcon = document.getElementById('redIcon')
const msgError = document.getElementById('error')

console.log(email, submitButton, erroIcon, msgError)

submitButton.addEventListener('click', ()=>{
    const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email.value!== emailFormat){
        msgError.classList.remove('hidden')
        erroIcon.classList.remove('hidden')
    }
})