burger =document.querySelector('.burger')
navbar=document.querySelector('#nav')
container=document.querySelector('#container')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('vclass');
    
    container.classList.toggle('hnav');
})