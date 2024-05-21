// Una de varias formas que hay para escribir contenido en la consola y saber que esta conetado con el html que queremos
console.log("HELLO WORLD");

// asi se crean las variables
// const myName = "Brayan Roncancio";
// aqui selecionamos el headding-primary con la funcion querySelector
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// esto sirve para que el heading-primary responda a un click cuando esto pasa ejecuta esas tres lineas cambia el titulo a brayan roncancio, le pone rojo de fondo y le agrega 50 de padding.gracias a la funcion addEventListener(
// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

//SET CURRENT YEAR
// asi se seleccionamos un elemento que este dentro de una html
const yearEl = document.querySelector(".year");
// para obtener el año actual
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Esto es para que los botenes del menos repsondad al click abra y cierre el menu
btnNavEl.addEventListener("click", function () {
  // toggle mira la clase headerEl si no esta la quita y si esta remueve la clase la clase NAVA.OPEN.
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// ///////////////////////////////////////////////////////
// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting == true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
