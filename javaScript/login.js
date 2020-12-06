const form=document.querySelector('form');
const adiv=document.querySelector('.admin-form');
const wel=document.querySelector('.welcome');
const userName=document.querySelector('#username');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    adiv.style.display="none";
    wel.innerHTML='Welcome <span>'+userName.value+'</span>';
})