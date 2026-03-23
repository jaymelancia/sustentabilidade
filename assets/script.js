// Espera o site carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona todas as imagens que têm a classe 'zoom-img'
    const imagens = document.querySelectorAll('.zoom-img');

    imagens.forEach(img => {
        // Efeito ao passar o mouse em cima (Mouse Over)
        img.addEventListener('mouseover', () => {
            img.style.transform = "scale(1.1) translateY(-10px)"; 
            // scale(1.1) aumenta o tamanho em 10%
            // translateY(-10px) faz ela "pular" para cima
        });

        // Efeito ao tirar o mouse (Mouse Out)
        img.addEventListener('mouseout', () => {
            img.style.transform = "scale(1) translateY(0)"; 
            // Volta ao tamanho original
        });
    });

    console.log("Site de Sustentabilidade carregado com sucesso!");
});
