document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso!");

    // Efeito de hover nos botões
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Animação de entrada para a galeria
    const galleryItems = document.querySelectorAll(".small-image-container");
    galleryItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
            item.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Informações das obras
    const obrasInfo = {
        "obra1": "A Noite Estrelada é uma das pinturas mais famosas de Van Gogh, representando o céu noturno sobre Saint-Rémy-de-Provence.",
        "obra2": "Doze Girassóis numa Jarra faz parte de uma série de pinturas que Van Gogh fez para decorar seu ateliê.",
        "obra3": "Quarto em Arles mostra o quarto simples onde Van Gogh viveu na França.",
        "obra4": "Campo de Trigo com Corvos é considerada uma de suas últimas pinturas, transmitindo emoção e intensidade.",
        "obra5": "Amendoeira em Flor simboliza renascimento e foi pintada em homenagem ao nascimento de seu sobrinho."
    };

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const obraId = event.target.dataset.obra;
            if (obraId === "vangogh") {
                window.location.href = "https://pt.wikipedia.org/wiki/Autorretrato_(Van_Gogh,_1889)";
            } else if (obrasInfo[obraId]) {
                alert(obrasInfo[obraId]);
            }
        });
    });
});