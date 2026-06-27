const botao = document.getElementById('menu-toggle');

const menu = document.getElementById('menu');

botao.addEventListener('click', () => {

    menu.classList.toggle('active');

});
function trocarImagem(imagem){

    const apresentacao = imagem.closest('.apresentacao');

    const principal = apresentacao.querySelector('.imagem-principal img');

    principal.style.opacity = "0";

    setTimeout(() => {

        principal.src = imagem.src;

        principal.style.opacity = "1";

    },150);

    apresentacao
        .querySelectorAll(".miniatura")
        .forEach(img => img.classList.remove("ativa"));

    imagem.classList.add("ativa");
}

const elementos = document.querySelectorAll(".animar");

const observador = new IntersectionObserver((entradas, observer)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

            observer.unobserve(entrada.target);

        }

    });

});

elementos.forEach(elemento=>observador.observe(elemento));