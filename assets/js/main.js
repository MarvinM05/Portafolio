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


// const formulario = document.querySelector("#form");
// const sendForm = document.querySelector("#mail");

// formulario.addEventListener("submit", handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//   const form = new FormData(this);
//   sendForm.setAttribute(
//     "href",
//     `mailto:test@correo.com?subject=${form.get("name")} - ${form.get(
//       "subject"
//     )}&body=${form.get("message")}`
//   );
//   sendForm.click();
// }
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
