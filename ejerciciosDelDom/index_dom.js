
import {relojDigital, alarma}from "./reloj_digtal.js";
import menuHamburguesa from "./menu_amburguer.js";
import cambiarTema from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import testerResponsivo from "./response_dinamico.js";
import informacionDeDispositivos from "./deteccion_dispositivos.js";
import estadoDeRed from "./deteccion_red.js";
import webcam from "./deteccion_webcam.js";
import geolocalizar from "./geolocalizacion.js";
import slider from "./carrusel.js";
import validarFormulario from "./validaciones_formulario.js";

const d = document;

//este metodo es para el menu de hamburguesa y como es el DOMContentLoaded
//carga el iniciar la pagina.
d.addEventListener("DOMContentLoaded", (e)=>{
    menuHamburguesa(".panel-btn", ".panel",".menu a");

//este metodo es para el reloj digital 
   
    relojDigital("#reloj","#activar-reloj","#desactivar-reloj","#id-papa");

    alarma("assets/alarma_2.mp3","#activar-alarma","#desactivar-alarma");

    
     
responsiveMedia("youtube",
"(min-width: 800px)",
`<a href= "https://www.youtube.com/watch?v=3Ca0NxhFrlg&list=PLhwspTMi0fEsI59RwajVitvtRnJvmlEm8&index=16">Ver video</a>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/3Ca0NxhFrlg"
 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
 gyroscope; picture-in-picture" allowfullscreen></iframe>`
);

responsiveMedia("gmaps",
"(min-width: 800px)",
`<a href="https://goo.gl/maps/cHMcVUnyWkRiwRuG7">Ver mapa</a>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3341.909422684446!2d-75.51885884789763!3d5.067657612610377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x25810bc036523ce7!2sCatedral%20bas%C3%ADlica%20de%20Nuestra%20Se%C3%B1ora%20del%20Rosario%20de%20Manizales!5e0!3m2!1ses-419!2sco!4v1613069405502!5m2!1ses-419!2sco"
 width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`

);
testerResponsivo("responsive-tester");
informacionDeDispositivos("user-device")

webcam("webcam"); 

geolocalizar("geolocation");

slider();
validarFormulario();

});

cambiarTema(".dark-theme-btn","dark-mode");

estadoDeRed();


       
