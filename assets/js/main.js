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

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//   // Do something with the scroll position
// }

// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
