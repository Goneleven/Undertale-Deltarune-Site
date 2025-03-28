document.querySelector('.botao-modo').addEventListener('click', (e) => {
    e.target.classList.toggle('selecao-move');
    document.body.classList.toggle('light');

});