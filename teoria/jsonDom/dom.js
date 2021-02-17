//Esta es para hablar el pc con algun texto
/* let texto= "Hola mi nombre es Yohn Levis Tabares"; 

const hablar = (texto)=> {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
hablar(texto); */


    //COMO UTILIZAR SELECTORES
//como capturar elementos desde el html hacia los js
//trae todos los li y devuelve una coleccion de html
  /* console.log(document.getElementsByTagName("li"));
  console.log(document.getElementsByClassName("card"));
  console.log(document.getElementsByName("nombre"));


console.log(document.getElementsByName("menu"));
//los tres primeros fueron reemplazados por estos tres siguientes
//y se utiliza para traer los selectores del html, solo el primero que encuentre
console.log(document.querySelector("#menu"));
//con este se trae todos los selectores
console.log(document.querySelectorAll("#menu"));
//cuenta cuantos enlaces tiene
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el)=> console.log(el));
//Aca trae la tarjeta people que esta en la posicion 2
console.log(document.querySelectorAll(".card")[1]);
console.log(document.querySelectorAll(".card"));


//ATRIBUTOS DE LAS ETIQUETAS HTML

//Como traer los atributos de una etiqueta html

 console.log(document.querySelector(".link-dom").getAttribute("href"));
 console.log(document.querySelector(".link-dom").href);

 document.documentElement.lang= "en";
 document.documentElement.setAttribute("lang","es-MX")

 const $linkDOM= document.querySelector(".link-dom")
 $linkDOM.setAttribute("target","_blank"); 
 //para evitar la dependencia entra la ventana que se abre nueva y la ventana origen, por seguridad
 $linkDOM.setAttribute("rel","noopener");
 $linkDOM.setAttribute("href","https://www.youtube.com/watch?v=gE2J_Dzyeeo"); 
 console.log($linkDOM.hasAttribute("rel"))
 $linkDOM.removeAttribute("rel");
 console.log($linkDOM.hasAttribute("rel"))

 //Data-Attributes que ofrece html5 

 console.log($linkDOM.getAttribute("data-description"));
 $linkDOM.setAttribute("data-description", "Modelo del documento");
 console.log($linkDOM.getAttribute("data-description")); */

 /* const $linkDOM= document.querySelector(".link-dom"); 
 //dos formas de acceder pero trae mas informacion la primera, el objeto completo 
 console.log($linkDOM.style);
 console.log($linkDOM.getElementsByClassName("style"));
 console.log($linkDOM.style.backgroundColor);
 console.log($linkDOM.style.color);
 console.log(window.getComputedStyle($linkDOM));
 console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

 $linkDOM.style.setProperty("text-decoration","none");
 $linkDOM.style.setProperty("display","block");
 //tambien se puede con los puntos. 
 $linkDOM.style.width= "50%";
 $linkDOM.style.textAlign= "center";
 $linkDOM.style.marginLeft= "auto";
 $linkDOM.style.marginRight= "auto";
 $linkDOM.style.padding= "1rem";
 $linkDOM.style.borderRadius= "5rem";
 */


 //Variables CSS- Customs 

/*  const $html= document.documentElement,
    $body= document.body; 

    let varDarkColor= getComputedStyle($html).getPropertyValue("--dark-color");
       varYellowColor= getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor,varYellowColor);
$body.style.backgroundColor= varDarkColor;
$body.style.color= varYellowColor;

$html.style.setProperty("--dark-color", "black");
varDarkColor= getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);


//aca inicio con lo que esta estatico de css en el arhicvo jsondom.html

const $card= document.querySelector(".card"); 
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
//con esta linea ya no aparece la imagen con la rotacion.
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45")); 
//ete metodo toggle funciona como el remove y el add, aqui como no la tiene se la agrega
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");
//con el toggle le quito lo adicionado antes. 
$card.classList.toggle("opacity-80","sepia");
    
const $whatIsDOM= document.getElementById("que-es");

let text=` <p>
  El modelo de Objetos del Documento (<b><i>DOM-Document Object Model </i> </b>)
  es un API para documentos HTML y XML
</p>
<p>
Éste proveé una representacion estructural del documento, permitiendo modificar su contenido y 
presetacion visual mediante código js
</p>
<p>
<mark> 
EL DOM no es parte de la especificacion de javaScript, es una API para los navegadores
</mark>
</p>
`;
 

//para ingresar texto hacia el html 


$whatIsDOM.textContent= text; 
$whatIsDOM.innerHTML= text; 
//es mas optimo ya que el reemplazo de alguna manera es mas limpio
$whatIsDOM.outerHTMLHTML= text;  */

/* 
const $cards = document.querySelector(".cards"); 
console.log($cards)
//si quiero hacer referencia a los hijos
console.log($cards.children);
//Si deseo hacer referencia a un hijo en especial.  
console.log($cards.children[2]);

console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
//Traigo el segundo elemento
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("body")); */


//creando elementos y fragmentos, aca me toco comentar todo lo que llevava de cards
/* const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption= document.createElement("figcaption"),
      $figcaptionText= document.createTextNode("Animals"),
      $cards = document.querySelector(".cards");

     $img.setAttribute("src","https://placeimg.com/200/200/animals"); 
     $img.setAttribute("alt","Animals")
     //se adiciona al nodo para que tome los estilos 
     $figure.classList.add("card");
      $figcaption.appendChild($figcaptionText);
      $figure.appendChild($img);
      $figure.appendChild($figcaption);
      $cards.appendChild($figure);

      //otra forma de adicionar elelmentos
      $figure2= document.createElement("figure");

      $figure.innerHTML= `
      <img src ="https://placeimg.com/200/200/people" alt= "People">
      <figcaption> People </figcaption>
      `; 
     //Se adiciona al bloque para que tome los estilos 
      $figure2.classList.add("card");


      //Para hacerlo con varios datos. 


      const estaciones = ["Primavera", "Verano", "Otoño","Invierno"],
      $ul = document.createElement("ul"); 

      document.write("<h3>Estaciones del año</h3>");
      document.body.appendChild($ul);
       //para generar elementos de forma rapida 
      estaciones.forEach(el =>{
        const $li= document.createElement("li");
        $li.textContent= el;
        $ul.appendChild($li);
      }); */

      //tambien se puede hacer de esta forma pero no es tan optima 

  const continentes = ["Africa","America", "Asia", "Europa", "Oceania"],
      $ul2 = document.createElement("ul"); 

      document.write("<h3>Continentes del Mundo</h3>"); 
      document.body.appendChild($ul2);
      //cuando se vaya a generar de forma masiva se debe inicializar innerHtml en vacio 
      $ul2.innerHTML="";
      continentes.forEach(el =>  $ul2.innerHTML+= `<li>${el}</li>`);

      //ESTA ES LA FORMA MAS OPTIMA DE HACERLO OJOO 

      const meses= [
        "Enero",
        "Febreo",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ]; 

      $ul3 = document.createElement("ul"); 
      $fragmento = document.createDocumentFragment();
      meses.forEach(el =>{
        const $li= document.createElement("li");
        $li.textContent= el;
        $fragmento.appendChild($li); 
      });
      document.write("<h3>Meses del año</h3>");
      $ul3.appendChild($fragmento); 
      document.body.appendChild($ul3);



      //TEMPLATES HTML implementado en HTML5 y se declara en el archivo HTML
      //para este caso se le coloco el id= template-card. 
/* 
   const $cards= document.querySelector(".cards"),
      $template = document.getElementById("template-card").content,
      $fragment = document.createDocumentFragment(),
      cardContent= [
        {
          title: "Tecnologia",
          img:"https://placeimg.com/200/200/tech"
        },
        {
          title: "Animales",
          img: "https://placeimg.com/200/200/animals"
        },
        {
          title: "Arquitectura",
          img: "https://placeimg.com/200/200/arch"
        },
        {
          title: "Personas",
          img: "https://placeimg.com/200/200/people"
        },
        {
          title: "Naturaleza",
          img: "https://placeimg.com/200/200/nature"
        },
      ];

      cardContent.forEach(el =>{
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent= el.title;
        //aca se clona la estructura, osea el nodo 

        let $clone = document.importNode($template,true); 
        $fragment.appendChild($clone);

      }); 
      $cards.appendChild($fragment); */



      //MODIFICANDO ELEMENTOS

      /* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/


/* const $card = document.querySelector(".cards"),
   $newCard = document.createElement("figure");

   $newCard.innerHTML= `
   <img src = "https://placeimg.com/200/200/any" alt= "any">
   <figcaption> Any </figcaption>
   `; 

   $newCard.classList.add("card");
   //aca se puede cambiar afterbegin por cualquiera de las comentadas antes
   $card.insertAdjacentElement("afterbegin", $newCard */


   //esta es otra forma de hacerlo. 
   /* const $card = document.querySelector(".cards"),
   $newCard = document.createElement("figure");
     //aca no se le coloca el nombre de la figura,  se hace con el 
     //insertAdjacentText 
   let $contentCard = `
   <img src = "https://placeimg.com/200/200/any" alt= "any">
   <figcaption></figcaption>
   `; 

   $newCard.classList.add("card");
   //aca se puede cambiar afterbegin por cualquiera de las comentadas antes
   $newCard.insertAdjacentHTML("beforeend",$contentCard);
   $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Anyyy");
   //$card.insertAdjacentElement("afterbegin", $newCard);

   $card.prepend($newCard);
   $card.append($newCard);
   $card.before($newCard);
   $card.after($newCard); */





     //MANEJADORES DE EVENTOS

 /* function holaMundo(){
   alert("Hola mundo"); 
   //con la palabra reservada event puedo entrar al evento. 
   console.log(event);
 }
const $eventoSemantico= document.getElementById("evento-semantico");
//importante enviar la funcion sin el parentesis. 
$eventoSemantico.onclick= holaMundo; 
//manejador evento multiple
const $eventoMultiple= document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click",holaMundo);
//o tambien se puede con una arrow function y aca se ejecutaran los dos
//el que llama al hola mundo y el de eventos multiples..
$eventoMultiple.addEventListener("click",(e)=>{
  alert("HOla mundo con manejador de eventos multiples");
  console.log(event);
  console.log(event.target);
  console.log(event.type);
});
  
//Aca es por si se requiere pasar parametros 
function saludar(nombre= "Desconocid@"){
   alert(`Hola ${nombre}`);
}
$eventoMultiple.addEventListener("click",()=>{
  saludar();
  saludar("levis");
});
//para remover un evento debe ser guardada en una variable
const $eventoRemover= document.getElementById("evento-remover");
const removeDobleClick= (e)=>{
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick",removeDobleClick);
  $eventoRemover.disabled=true;
}

$eventoRemover.addEventListener("dblclick",removeDobleClick); */






//FLUJO DE EVENTOS
/* 
const $divsEventos= document.querySelectorAll(".eventos-flujo div");
//para ver el funcionamiento debo ir al html y darle click a los div en amarillo 
function flujoEventos(e){
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
//si descomento la linea siguiente se para la propagacion y solo funciona
//en cada div que le de click
 // e.stopPropagation();
}

$divsEventos.forEach(div=>{
  //fase de burbuja desde el evento mas interno hacia el mas externo
                div.addEventListener("click", flujoEventos,false);
  //si se quiere activar la fase del mas externo al mas interno se le adiciona el true
     //div.addEventListener("click", flujoEventos,true);

 //Si se requiere que el evento se ejecute una sola vez
 // div.addEventListener("click", flujoEventos,{
  // capture:false,
  // once:true
 // }); 

})

    // aca se va a manipular el evento 
const $linkEventos = document.querySelector(".eventos-flujo div");
     $linkEventos.addEventListener("click", (e)=>{
       alert("Estoy triunfando con desarrollo web");
       //con esto cacelo la acccion por defecto y solo queda el evento puesto en 
       //esta funcion
       //e.preventDefault();
     }) */

//OTRA FORMA MAS OPTIMA DE MANEJAR FLUJO DE EVENTOS LLAMADA DELEGACION DE EVENTOS, pilas debo tener comentado flujo de eventos

/* function flujoEventos(e){
  console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
//si descomento la linea siguiente se para la propagacion y solo funciona
//en cada div que le de click
 // e.stopPropagation();
}

document.addEventListener("click", (e)=>{
    console.log("click en",e.target)
if (e.target.matches(".eventos-flujo div")){
  flujoEventos(e);
}


  // el .matches es para buscar un selector valido
    if (e.target.matches(".eventos-flujo a")){
      alert("Estoy triunfando con desarrollo web");
       //con esto cacelo la acccion por defecto y solo queda el evento puesto en 
       //esta funcion 
      e.preventDefault();
    }
}); */




//MANEJO DEL BOOM

//Solo se ejecuta cuando la ventana la expandimos a achicamos 
/* window.addEventListener("resize",(e)=>{
console.clear();
console.log("+++++++++++Evento Resize")
//tamaño de la ventana
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  //tamaño de la ventana o resolucion de la pantalla
  console.log(window.outerWidth);
  console.log(window.outerHeight);
 
  console.log(e);
})

window.addEventListener("scroll", (e)=>{
 // console.clear();
  console.log("+++++++++++Evento Scroll")
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
})

window.addEventListener("load",(e)=>{
  //Se documenta el clear para poder ver los dos eventos, este y el DOMContentLo..
  //console.clear();
  console.log("+++++++++++Evento Load")
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
  //Esta es la mejor opcion por rendimiento ojooo utilizar este
document.addEventListener("DOMContentLoaded",(e)=>{
  //console.clear();
  console.log("+++++++++++Evento DOMcontentLoaded");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); */





   //BOOM METODOS con botones
                  //todo lo que cuelga de window no es necesario colocar la palabra window
                  //asi como se muestra en estas tres 
                  // window.prompt("Aviso");
                  // confirm("Confirmacion");
                  //  alert("Alerta");


/*  const $btnAbrir = document.getElementById("abrir-ventana");     
 const $btnCerrar = document.getElementById("cerrar-ventana");     
 const $btnImprimir = document.getElementById("imprimir-ventana");  
 
 let ventana;
 $btnAbrir.addEventListener("click", (e)=> {    
  ventana =  open("https://www.youtube.com/watch?gl=CO&threaded=1&page=2&hl=es-419&v=hLQl3WQQoQ0");
 });
 $btnCerrar.addEventListener("click", (e)=> {
   ventana.close();
 });
 $btnImprimir.addEventListener("click", (e)=> {
     print();
 }); */






    //OBJETO LOCATION
/*  console.log("*******Objeto URL (location)***********");
 console.log(location);
 console.log(location.origin);
 console.log(location.protocol);
 console.log(location.host);
 console.log(location.hostname);
 console.log(location.port);
 console.log(location.href);
 console.log(location.hash);
 //este es para cuando se pasan valores por la url, importante
 console.log(location.search);
 console.log(location.pathname) */



    //OBJETO HISTORY

/* 
console.log("*******Objeto Historial (history) ***********"); 
console.log(history);
console.log(history.length);
      //history.back(); entre parentesis el numero que deseo devolverme 
      //history.go(); y con go es con numeros negativos y positivos. Positivos paginas hacia adelante y negativos paginas hacia atras
  
 */




      //OBJETO NAVIGATOR

console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
//para hacer progresive web apps, permite instalar como aplicacion de escritorio 
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);







