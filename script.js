document.documentElement.classList.add("js");
const fotosGaleria = document.querySelectorAll(".foto-galeria");
const modalGaleria = document.getElementById("modal-galeria");
const imagemModal = document.getElementById("imagem-modal");
const botaoFecharModal = document.querySelector(".fechar-modal");

fotosGaleria.forEach((fotoGaleria) => {
    fotoGaleria.addEventListener("click", () => {
        const foto = fotoGaleria.querySelector("img");

        imagemModal.src = foto.src;
        imagemModal.alt = foto.alt;

        modalGaleria.classList.add("ativo");
        document.body.classList.add("modal-aberto");
    });
});

function fecharModal() {
    modalGaleria.classList.remove("ativo");
    imagemModal.src = "";
    document.body.classList.remove("modal-aberto");
}

botaoFecharModal.addEventListener("click", fecharModal);

modalGaleria.addEventListener("click", (event) => {
    if (event.target === modalGaleria) {
        fecharModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fecharModal();
    }
});

const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu a");

botaoMenu.addEventListener("click", () => {
    const menuEstaAberto = menu.classList.toggle("ativo");

    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);

    botaoMenu.innerHTML = menuEstaAberto
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';
});

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.innerHTML = '<i class="bi bi-list"></i>';
    });
});

const elementosAnimados = document.querySelectorAll(".revelar");

const observadorAnimacao = new IntersectionObserver(
    (entradas, observador) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementosAnimados.forEach((elemento) => {
    observadorAnimacao.observe(elemento);
});