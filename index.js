const hamburguer = document.querySelector('#navHam');
const menuBlue = document.querySelector('#hamburguerNav')
const closeIcon= document.querySelector('#close')

hamburguer.addEventListener('click',()=>{
    menuBlue.classList.remove('hidden')
})
closeIcon.addEventListener('click',()=>{
    menuBlue.classList.add('hidden')
})



