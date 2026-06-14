const botao = document.getElementById('menu-toggle');

const menu = document.getElementById('menu');

botao.addEventListener('click', () => {

    menu.classList.toggle('active');

});
function trocarImagem(imagem){

    const apresentacao =
        imagem.closest('.apresentacao');

    const principal =
        apresentacao.querySelector('.imagem-principal img');

    principal.src = imagem.src;

    apresentacao
        .querySelectorAll('.miniatura')
        .forEach(img =>
            img.classList.remove('ativa')
        );

    imagem.classList.add('ativa');
}