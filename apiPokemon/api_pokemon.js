const d = document, 
$loadDocumen= d.getElementById("main-cargar"),
$fragment = d.createDocumentFragment(),
$main = d.querySelector("main"),
$links= d.querySelector(".links"); 

let pokeApi= " https://pokeapi.co/api/v2/pokemon/"; 
async function loadPokemons(url){
    try{    
     $main.innerHTML= `<img class="loader" src="oval.svg" alt="Cargando...">`;
     let res= await fetch(url), 
     
        json= await res.json(),
        
        $prevLink,
        $nextLink
        console.log(json);
          if(!res.ok){
            throw {status: res.status, statusTex: res.statusTex } 
          }
       //aca se debe hacar con un for clasico ya que debe ser bloqueante porque el forEach 
       //no esperaria la respuesta del otro empoint donde estan las imagenes de los pokemons
       for (let i=0; i<json.results.length; i++){
           
         try{
            let res= await fetch(json.results[i].url),
               pokemon= await res.json(); 
              
              if (!res.ok) throw {status:res.status, statusTex:res.statusText}
              const $template = d.createElement("figure");
              $template.innerHTML=  `<img src = "${pokemon.sprites.front_default}" alt= "${pokemon.name}">
                <figcaption>${pokemon.name}</figcaption>
                 `
             $fragment.appendChild($template);
         }catch(err){
           
            $main.innerHTML = `<p> Error: ${err.status}: ${message} </p>`
         }
         
       }
       $main.innerHTML= "";
       $loadDocumen.appendChild($fragment);
      
       $prevLink= json.previous ? `<a href="${json.previous}"> ⏮️ </a>`: "" ;
       $nextLink= json.next ?` <a href="${json.next}"> ⏭️ </a>`:"";
       $links.innerHTML= $prevLink+ " "+ $nextLink;
      
    }catch(err){
       let message= err.statusTex || "ocurrió un error"; 
       $main.innerHTML = `<p> Error: ${err.status}: ${message} </p>`
    }
}

d.addEventListener("DOMContentLoaded", e=> loadPokemons(pokeApi))

//delegacion de eventos

d.addEventListener("click", e=>{
    if(e.target.matches(".links a")){
//se coloca el prevenDefault para controlar los eventos por defecto desde la programacion
//javaScript, osea nos llevaria hacia el endpoint que tiene este evento click 
        e.preventDefault();
        loadPokemons(e.target.getAttribute("href"));

    }
})

