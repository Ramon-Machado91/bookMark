const hamburguer = document.querySelector('#navHam');
const menuBlue = document.querySelector('#hamburguerNav')
const closeIcon= document.querySelector('#close')

hamburguer.addEventListener('click',()=>{
    menuBlue.classList.remove('hidden')
})
closeIcon.addEventListener('click',()=>{
    menuBlue.classList.add('hidden')
})



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