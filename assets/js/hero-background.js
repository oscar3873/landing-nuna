const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

    const heroImg = d.getElementById("heroImg");
    const heroPathImgArr = ["assets/img/background5.jpg", "assets/img/background6.jpg", "assets/img/background3.jpg", "assets/img/background4.jpg", "assets/img/background1.jpg", "assets/img/background2.jpg"];
    
    let currentIndex = 0; // Iniciar el índice
    
    function changeImg() {
        heroImg.src = heroPathImgArr[currentIndex];
    
        // Reiniciar la animación
        heroImg.classList.remove("zoom-animation");
        void heroImg.offsetWidth; // Trigger reflow
        heroImg.classList.add("zoom-animation");
    
        // Actualizar el índice
        currentIndex = (currentIndex + 1) % heroPathImgArr.length;
    }
    
    setInterval(changeImg, 3000);

})

