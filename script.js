const numeroAlterado = document.querySelector('.contador p');
const botoes = document.querySelectorAll('a');

numeroAlterado.textContent = 0;
let count = 0

botoes.forEach((i) => {
    i.addEventListener('click', function(){
        if(i.innerText === 'INCREMENTAR'){
            count++;
        } else if (i.innerText === 'DECREMENTAR'){
            count--;
        } else {
            count = 0;
        }
        numeroAlterado.textContent = count
    })
})