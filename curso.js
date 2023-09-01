var imagem = document.getElementById("imagem");

imagem.addEventListener("click", function() {
    if (imagem.getAttribute("src") === "coração.png") {
        imagem.setAttribute("src", "coração-red.png");
        imagem.setAttribute("alt", "Imagem 2");
    } else {
        imagem.setAttribute("src", "coração.png");
        imagem.setAttribute("alt", "Imagem 1");
    }
});

//img 2

var imagem2 = document.getElementById("imagem2");

imagem2.addEventListener("click", function() {
    if (imagem2.getAttribute("src") === "coração.png") {
        imagem2.setAttribute("src", "coração-red.png");
        imagem2.setAttribute("alt", "Imagem 3");
    } else {
        imagem2.setAttribute("src", "coração.png");
        imagem2.setAttribute("alt", "Imagem 22");
    }
});

//img 3

var imagem3 = document.getElementById("imagem3");

imagem3.addEventListener("click", function() {
    if (imagem3.getAttribute("src") === "coração.png") {
        imagem3.setAttribute("src", "coração-red.png");
        imagem3.setAttribute("alt", "Imagem 4");
    } else {
        imagem3.setAttribute("src", "coração.png");
        imagem3.setAttribute("alt", "Imagem 3");
    }
});