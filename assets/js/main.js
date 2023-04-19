let ubicacionPrincipal = window.pageYOffset
const $nav = document.querySelector('#nav2')

window.addEventListener("scroll", function () {
    let ubicacionActual = window.pageYOffset;
    
    console.log(ubicacionActual);
    if (ubicacionPrincipal >= ubicacionActual) {
        $nav.style.top = "0px"
    } else {
        $nav.style.top = "-80px"
    }

    ubicacionPrincipal = ubicacionActual
});


