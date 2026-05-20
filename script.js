

function mostrarSecao(secao) {
    document.getElementById('servicos').style.display = 'none';
    document.getElementById('fotos').style.display = 'none';

    document.getElementById(secao).style.display = 'block';
}

function abrirModal(imagem) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("imagemModal").src = imagem.src;
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

